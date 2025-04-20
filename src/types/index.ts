
export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  image: string;
  rating: number;
  reviews: number;
  location: string;
  nextAvailable: string;
}

export interface Appointment {
  id: string;
  doctorId: string;
  date: string;
  time: string;
  status: "confirmed" | "pending" | "cancelled";
}

// export type AppointmentWithDoctor = Appointment & {
//   doctor: Doctor;
// };

export interface AppointmentWithDoctor extends Omit<Appointment, 'doctorId'> {
  doctorId?: string; // Make optional to accommodate Firebase structure
  doctor: Doctor;
}

export type Specialty = 
  | "All Specialties" 
  | "Cardiologist" 
  | "Dermatologist" 
  | "Neurologist" 
  | "Pediatrician" 
  | "Psychiatrist"
  | "Orthopedic";

export type Availability = 
  | "Any Availability" 
  | "Today" 
  | "Tomorrow" 
  | "This Week";


export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  dateOfBirth: string;
  gender: string;
  bloodType: string;
  weight: string;
  height: string;
  allergies: string[];
  medications: string[];
  profileImage: string;
  address: string;
  insuranceProvider: string;
  insuranceNumber: string;
  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
  };
}