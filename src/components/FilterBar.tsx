
import React from 'react';
import { Search } from 'lucide-react';
import { useAppointments } from '../contexts/AppointmentContext';
import { Specialty, Availability } from '../types';

const FilterBar: React.FC = () => {
  const { 
    setSpecialtyFilter, 
    setAvailabilityFilter, 
    setSearchQuery,
    specialtyFilter,
    availabilityFilter
  } = useAppointments();

  const specialties: Specialty[] = [
    "All Specialties", 
    "Cardiologist", 
    "Dermatologist", 
    "Neurologist", 
    "Pediatrician", 
    "Psychiatrist",
    "Orthopedic"
  ];

  const availabilities: Availability[] = [
    "Any Availability", 
    "Today", 
    "Tomorrow", 
    "This Week"
  ];

  return (
    <div className="flex flex-col md:flex-row gap-4 my-6">
      <div className="flex flex-1 gap-4">
        <div className="relative w-full md:w-48">
          <select
            className="w-full p-2 border border-gray-200 rounded-md appearance-none pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={specialtyFilter}
            onChange={(e) => setSpecialtyFilter(e.target.value)}
            aria-label="Filter by specialty"
          >
            {specialties.map((specialty) => (
              <option key={specialty} value={specialty}>
                {specialty}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>

        <div className="relative w-full md:w-48">
          <select
            className="w-full p-2 border border-gray-200 rounded-md appearance-none pr-8 focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={availabilityFilter}
            onChange={(e) => setAvailabilityFilter(e.target.value)}
            aria-label="Filter by availability"
          >
            {availabilities.map((availability) => (
              <option key={availability} value={availability}>
                {availability}
              </option>
            ))}
          </select>
          <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
            <svg className="w-4 h-4 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </div>

      <div className="relative flex-1 md:flex-none md:w-80">
        <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
          <Search className="h-4 w-4 text-gray-400" />
        </div>
        <input
          type="text"
          placeholder="Search doctors..."
          className="w-full pl-10 p-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          onChange={(e) => setSearchQuery(e.target.value)}
          aria-label="Search doctors"
        />
      </div>
    </div>
  );
};

export default FilterBar;
