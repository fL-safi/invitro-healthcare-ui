
import { Doctor, Appointment } from '../types';

export const doctors: Doctor[] = [
  {
    id: "d1",
    name: "Dr. John Smith",
    specialty: "Cardiologist",
    image: "/assets/johnsmith.png",
    rating: 4.8,
    reviews: 124,
    location: "New York Medical Center",
    nextAvailable: "Today, 2:00 PM"
  },
  {
    id: "d2",
    name: "Dr. Sarah Johnson",
    specialty: "Dermatologist",
    image: "/assets/sarah.png",
    rating: 4.9,
    reviews: 98,
    location: "Manhattan Clinic",
    nextAvailable: "Tomorrow, 10:00 AM"
  },
  {
    id: "d3",
    name: "Dr. Michael Chen",
    specialty: "Neurologist",
    image: "/assets/micheal.png",
    rating: 4.7,
    reviews: 156,
    location: "Brooklyn Medical",
    nextAvailable: "Today, 4:30 PM"
  },
  {
    id: "d4",
    name: "Dr. James Wilson",
    specialty: "Cardiologist",
    image: "/assets/james.png",
    rating: 4.6,
    reviews: 87,
    location: "Queens Health Center",
    nextAvailable: "Tomorrow, 1:15 PM"
  },
  {
    id: "d5",
    name: "Dr. Emily Rodriguez",
    specialty: "Pediatrician",
    image: "/assets/emily.png",
    rating: 4.9,
    reviews: 203,
    location: "Children's Hospital",
    nextAvailable: "Today, 3:00 PM"
  },
  {
    id: "d6",
    name: "Dr. David Kim",
    specialty: "Psychiatrist",
    image: "/assets/david.png",
    rating: 4.5,
    reviews: 76,
    location: "Mental Health Clinic",
    nextAvailable: "In 2 days, 11:30 AM"
  }
];

export const mockAppointments: Appointment[] = [
  {
    id: "a1",
    doctorId: "d1",
    date: "Apr 20, 2025",
    time: "2:00 PM",
    status: "confirmed"
  },
  {
    id: "a2",
    doctorId: "d2",
    date: "Apr 22, 2025",
    time: "10:00 AM",
    status: "pending"
  }
];

export const getTimeSlots = () => {
  return [
    "9:00 AM",
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "1:00 PM",
    "1:30 PM",
    "2:00 PM",
    "2:30 PM",
    "3:00 PM",
    "3:30 PM",
    "4:00 PM",
    "4:30 PM"
  ];
};

export const getDaysInMonth = (year: number, month: number) => {
  const date = new Date(year, month, 1);
  const days = [];
  while (date.getMonth() === month) {
    days.push(new Date(date));
    date.setDate(date.getDate() + 1);
  }
  return days;
};
