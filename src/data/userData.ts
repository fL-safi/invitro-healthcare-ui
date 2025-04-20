// src/data/userData.ts
import { UserProfile } from '../types';

export const userProfile: UserProfile = {
  id: "user123",
  name: "Shane Watson",
  email: "shane@mail.com",
  phone: "(555) 123-4567",
  dateOfBirth: "Apr 15, 1985",
  gender: "Male",
  bloodType: "O+",
  weight: "140 lbs",
  height: "5'6\"",
  allergies: ["Penicillin", "Peanuts"],
  medications: ["Lisinopril 10mg", "Vitamin D"],
  profileImage: "/assets/profile.jpg",
  address: "123 Main St, Apartment 4B, New York, NY 10001",
  insuranceProvider: "BlueCross BlueShield",
  insuranceNumber: "BCB12345678",
  emergencyContact: {
    name: "Michael Johnson",
    relationship: "Spouse",
    phone: "(555) 987-6543"
  }
};