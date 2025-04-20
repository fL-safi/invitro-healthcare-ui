// src/contexts/AppointmentContext.tsx
import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Doctor, AppointmentWithDoctor } from '../types';
import { doctors } from '../data/mockData';
import { fetchAppointments, addAppointmentToFirebase } from '../services/firebase';

interface AppointmentContextType {
  appointments: AppointmentWithDoctor[];
  addAppointment: (doctorId: string, date: string, time: string) => void;
  doctors: Doctor[];
  filteredDoctors: Doctor[];
  setSpecialtyFilter: (specialty: string) => void;
  setAvailabilityFilter: (availability: string) => void;
  setSearchQuery: (query: string) => void;
  specialtyFilter: string;
  availabilityFilter: string;
  searchQuery: string;
  loading: boolean;
}

const AppointmentContext = createContext<AppointmentContextType | undefined>(undefined);

export const AppointmentProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [appointments, setAppointments] = useState<AppointmentWithDoctor[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [specialtyFilter, setSpecialtyFilter] = useState<string>("All Specialties");
  const [availabilityFilter, setAvailabilityFilter] = useState<string>("Any Availability");
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Fetch appointments when component mounts
  useEffect(() => {
    const loadAppointments = async () => {
      setLoading(true);
      const data = await fetchAppointments();
      setAppointments(data);
      setLoading(false);
    };
    
    loadAppointments();
  }, []);

  const filteredDoctors = doctors.filter(doctor => {
    // Filter by specialty
    const matchesSpecialty = specialtyFilter === "All Specialties" || doctor.specialty === specialtyFilter;
    
    // Filter by availability
    let matchesAvailability = true;
    if (availabilityFilter !== "Any Availability") {
      if (availabilityFilter === "Today" && !doctor.nextAvailable.includes("Today")) {
        matchesAvailability = false;
      } else if (availabilityFilter === "Tomorrow" && !doctor.nextAvailable.includes("Tomorrow")) {
        matchesAvailability = false;
      } else if (availabilityFilter === "This Week" && doctor.nextAvailable.includes("In 2 days")) {
        matchesAvailability = true;
      }
    }
    
    // Filter by search query
    const matchesSearch = searchQuery === "" || 
      doctor.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.specialty.toLowerCase().includes(searchQuery.toLowerCase()) ||
      doctor.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesSpecialty && matchesAvailability && matchesSearch;
  });

  const addAppointment = async (doctorId: string, date: string, time: string) => {
    const doctor = doctors.find(doc => doc.id === doctorId);
    if (!doctor) return;
    
    const newAppointment: AppointmentWithDoctor = {
      id: `a${Date.now()}`,
      doctorId,
      date,
      time,
      status: "pending",
      doctor
    };
    
    // Add to local state first for immediate UI update
    setAppointments(prevAppointments => [...prevAppointments, newAppointment]);
    
    // Then send to Firebase
    const firebaseId = await addAppointmentToFirebase(newAppointment);
    
    // If successful, update the ID with the one from Firebase
    if (firebaseId) {
      setAppointments(prevAppointments => 
        prevAppointments.map(app => 
          app.id === newAppointment.id ? { ...app, id: firebaseId } : app
        )
      );
    }
  };

  return (
    <AppointmentContext.Provider value={{
      appointments,
      addAppointment,
      doctors,
      filteredDoctors,
      setSpecialtyFilter,
      setAvailabilityFilter,
      setSearchQuery,
      specialtyFilter,
      availabilityFilter,
      searchQuery,
      loading
    }}>
      {children}
    </AppointmentContext.Provider>
  );
};

export const useAppointments = () => {
  const context = useContext(AppointmentContext);
  if (context === undefined) {
    throw new Error('useAppointments must be used within an AppointmentProvider');
  }
  return context;
};