
import React, { useState, useEffect } from 'react';
import { format, addMonths, subMonths, startOfMonth, endOfMonth, eachDayOfInterval, isSameDay, addDays } from 'date-fns';
import { Calendar, Clock, X } from 'lucide-react';
import { Doctor } from '../types';
import { getTimeSlots } from '../data/mockData';

interface AppointmentModalProps {
  doctor: Doctor | null;
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (doctorId: string, date: string, time: string) => void;
}

const AppointmentModal: React.FC<AppointmentModalProps> = ({
  doctor,
  isOpen,
  onClose,
  onConfirm
}) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const timeSlots = getTimeSlots();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setSelectedDate(null);
      setSelectedTime(null);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') {
      onClose();
    }
  };

  const previousMonth = () => {
    setCurrentMonth(subMonths(currentMonth, 1));
  };

  const nextMonth = () => {
    setCurrentMonth(addMonths(currentMonth, 1));
  };

  const daysInMonth = eachDayOfInterval({
    start: startOfMonth(currentMonth),
    end: endOfMonth(currentMonth)
  });

  const renderCalendar = () => {
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    
    return (
      <div>
        <div className="flex justify-between items-center mb-4">
          <button 
            className="p-1 rounded-full hover:bg-gray-100"
            onClick={previousMonth}
            aria-label="Previous month"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <h3 className="text-lg font-medium">{format(currentMonth, 'MMMM yyyy')}</h3>
          <button 
            className="p-1 rounded-full hover:bg-gray-100"
            onClick={nextMonth}
            aria-label="Next month"
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="grid grid-cols-7 gap-1 text-center mb-2">
          {dayNames.map(day => (
            <div key={day} className="text-sm text-gray-600">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-1">
          {/* Add empty cells for days before the start of the month */}
          {Array.from({ length: daysInMonth[0].getDay() }).map((_, index) => (
            <div key={`empty-${index}`} className="h-10 w-10"></div>
          ))}

          {daysInMonth.map(day => {
            const isSelected = selectedDate ? isSameDay(day, selectedDate) : false;
            const isToday = isSameDay(day, new Date());
            const isAvailable = day.getTime() >= new Date().getTime();

            return (
              <button
                key={day.toISOString()}
                className={`h-10 w-10 rounded-full flex items-center justify-center text-sm
                  ${isSelected ? 'bg-blue-600 text-white' : ''}
                  ${isToday && !isSelected ? 'border border-blue-600' : ''}
                  ${isAvailable ? 'hover:bg-gray-100 cursor-pointer' : 'text-gray-300 cursor-not-allowed'}
                `}
                disabled={!isAvailable}
                onClick={() => isAvailable && setSelectedDate(day)}
                aria-label={format(day, 'PPPP')}
                aria-selected={isSelected}
              >
                {format(day, 'd')}
              </button>
            );
          })}
        </div>
      </div>
    );
  };

  const renderTimeSlots = () => {
    if (!selectedDate) return null;

    return (
      <div className="grid grid-cols-2 gap-2 mt-4">
        {timeSlots.map(time => (
          <button
            key={time}
            className={`py-2 px-4 border rounded-md text-center
              ${selectedTime === time 
                ? 'bg-blue-50 border-blue-500 text-blue-700' 
                : 'border-gray-200 text-gray-700 hover:bg-gray-50'
              }
            `}
            onClick={() => setSelectedTime(time)}
            aria-selected={selectedTime === time}
          >
            {time}
          </button>
        ))}
      </div>
    );
  };

  // const handleConfirm = () => {
  //   if (doctor && selectedDate && selectedTime) {
  //     const formattedDate = format(selectedDate, 'MMM d, yyyy');
  //     onConfirm(doctor.id, formattedDate, selectedTime);
  //   }
  // };

  const handleConfirm = () => {
    if (doctor && selectedDate && selectedTime) {
      const formattedDate = format(selectedDate, 'MMM d, yyyy');
      onConfirm(doctor.id, formattedDate, selectedTime);
    }
  };

  if (!isOpen || !doctor) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={onClose}
      onKeyDown={handleKeyDown}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="bg-white rounded-lg max-w-md w-full max-h-[90vh] overflow-y-auto"
        onClick={e => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center">
              <img 
                src={doctor.image} 
                alt={doctor.name} 
                className="h-12 w-12 rounded-full object-cover mr-4"
              />
              <div>
                <h2 id="modal-title" className="text-xl font-semibold text-gray-900">{doctor.name}</h2>
                <p className="text-gray-600">{doctor.specialty}</p>
              </div>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-gray-500"
              aria-label="Close modal"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <h3 className="text-lg font-medium mb-4">Select Date & Time</h3>
          
          {renderCalendar()}
          {renderTimeSlots()}

          {selectedDate && selectedTime && (
            <div className="mt-6 bg-gray-50 p-4 rounded-md">
              <h4 className="font-medium text-gray-900 mb-2">Appointment Summary</h4>
              <div className="flex items-center text-gray-600 mb-1">
                <Calendar className="h-4 w-4 mr-2" />
                <span>{format(selectedDate, 'EEEE, MMMM d, yyyy')}</span>
              </div>
              <div className="flex items-center text-gray-600">
                <Clock className="h-4 w-4 mr-2" />
                <span>{selectedTime}</span>
              </div>
            </div>
          )}

          <div className="mt-6 flex gap-3">
            <button
              onClick={onClose}
              className="flex-1 py-3 px-2 bg-gray-100 text-gray-700 font-medium rounded-md hover:bg-gray-200 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleConfirm}
              disabled={!selectedDate || !selectedTime}
              className={`flex-1 py-3 px-2 bg-blue-600 text-white font-medium rounded-md
                ${selectedDate && selectedTime 
                  ? 'hover:bg-blue-700' 
                  : 'opacity-50 cursor-not-allowed'
                } transition-colors`}
            >
              Confirm Appointment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentModal;
