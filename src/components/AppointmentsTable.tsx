import React from 'react';
import { MapPin, Calendar, Clock } from 'lucide-react';
import { AppointmentWithDoctor } from '../types';
import { useAppointments } from '../contexts/AppointmentContext';

interface AppointmentsTableProps {
  appointments: AppointmentWithDoctor[];
}

const AppointmentsTable: React.FC<AppointmentsTableProps> = ({ appointments }) => {
  const { loading } = useAppointments();

  if (loading) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">Loading appointments...</p>
      </div>
    );
  }

  if (appointments.length === 0) {
    return (
      <div className="text-center py-8">
        <p className="text-gray-500">You don't have any appointments yet.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200" aria-label="Scheduled appointments">
      {/* <caption className="sr-only">List of your upcoming medical appointments</caption> */}
        <thead className="bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Doctor
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Specialty
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Date & Time
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Location
            </th>
            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {appointments.map((appointment) => (
            <tr key={appointment.id}>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="h-10 w-10 flex-shrink-0">
                    <img className="h-10 w-10 rounded-full" src={appointment.doctor.image} alt={appointment.doctor.name} />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">{appointment.doctor.name}</div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{appointment.doctor.specialty}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex flex-col text-sm text-gray-900">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                    {appointment.date}
                  </div>
                  <div className="flex items-center mt-1">
                    <Clock className="h-4 w-4 mr-1 text-gray-500" />
                    {appointment.time}
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center text-sm text-gray-900">
                  <MapPin className="h-4 w-4 mr-1 text-gray-500" />
                  {appointment.doctor.location}
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full
                  ${appointment.status === 'confirmed' ? 'bg-green-100 text-green-800' : ''}
                  ${appointment.status === 'pending' ? 'bg-yellow-100 text-yellow-800' : ''}
                  ${appointment.status === 'cancelled' ? 'bg-red-100 text-red-800' : ''}
                `}>
                  {appointment.status.charAt(0).toUpperCase() + appointment.status.slice(1)}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsTable;