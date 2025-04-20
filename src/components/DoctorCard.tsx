
import React from 'react';
import { MapPin, Clock, Star } from 'lucide-react';
import { Doctor } from '../types';
import { Card, CardContent } from '@/components/ui/card';

interface DoctorCardProps {
  doctor: Doctor;
  onBookAppointment: (doctorId: string) => void;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor, onBookAppointment }) => {
  return (
    <Card className="w-full" role="region" aria-label={`Doctor profile: ${doctor.name}`} >
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <img
            src={doctor.image}
            alt={doctor.name}
            className="w-16 h-16 rounded-lg object-cover"
          />
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-medium text-gray-900 truncate">{doctor.name}</h3>
            <p className="text-blue-600 text-sm">{doctor.specialty}</p>
            
            <div className="flex items-center mt-1">
              <Star className="h-4 w-4 text-yellow-400 fill-yellow-400" />
              <span className="ml-1 text-sm font-medium">{doctor.rating}</span>
              <span className="ml-1 text-sm text-gray-500">({doctor.reviews} reviews)</span>
            </div>
          </div>
        </div>
        
        <div className="mt-4 space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
            <span className="truncate">{doctor.location}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <Clock className="h-4 w-4 mr-2 flex-shrink-0" />
            <span className="truncate">Next Available: {doctor.nextAvailable}</span>
          </div>
        </div>
        
        <button
          onClick={() => onBookAppointment(doctor.id)}
          className="w-full mt-4 px-4 py-2 bg-blue-600 text-white font-medium rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          aria-label={`Book appointment with ${doctor.name}`}
        >
          Book Appointment
        </button>
      </CardContent>
    </Card>
  );
};

export default DoctorCard;
