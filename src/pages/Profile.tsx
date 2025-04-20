// src/pages/Profile.tsx
import React from 'react';
import Header from '../components/Header';
import ProfileCard from '../components/ProfileCard';
import { userProfile } from '../data/userData';

const Profile: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <a 
        href="#profile-heading" 
        className="sr-only focus:not-sr-only focus:absolute focus:p-4 focus:bg-blue-600 focus:text-white focus:z-50"
      >
        Skip to main content
      </a>
      
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <h1 
          id="profile-heading" 
          className="text-3xl font-bold text-gray-900 mb-6"
          tabIndex={-1}
        >
          My Profile
        </h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-1">
            <ProfileCard profile={userProfile} />
          </div>

          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Recent Activity</h2>
              
              <div className="border-l-2 border-gray-200 pl-4 space-y-8">
                <div className="relative">
                  <div className="absolute -left-[1.775rem] bg-blue-600 rounded-full w-6 h-6 flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Apr 15, 2025</p>
                    <h3 className="font-medium">Appointment with Dr. John Smith</h3>
                    <p className="text-gray-600">Regular check-up completed</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-[1.775rem] bg-green-500 rounded-full w-6 h-6 flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Mar 22, 2025</p>
                    <h3 className="font-medium">Blood Test Results</h3>
                    <p className="text-gray-600">All results within normal range</p>
                  </div>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-[1.775rem] bg-yellow-500 rounded-full w-6 h-6 flex items-center justify-center">
                    <span className="text-white text-xs">!</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Mar 10, 2025</p>
                    <h3 className="font-medium">Prescription Renewed</h3>
                    <p className="text-gray-600">Lisinopril 10mg - 90 days supply</p>
                  </div>
                </div>
              </div>
              
              <button 
                className="mt-6 text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                aria-label="View all medical history"
              >
                View Full Medical History
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg p-6 mt-6">
              <h2 className="text-xl font-bold text-gray-800 mb-4">Upcoming Appointments</h2>
              
              <div className="space-y-4">
                <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">Dr. Sarah Johnson</p>
                      <p className="text-gray-600">Dermatologist</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">Apr 28, 2025</p>
                      <p className="text-gray-600">10:00 AM</p>
                    </div>
                  </div>
                </div>
                
                <div className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">Dr. Michael Chen</p>
                      <p className="text-gray-600">Neurologist</p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">May 15, 2025</p>
                      <p className="text-gray-600">2:30 PM</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <button 
                className="mt-6 text-blue-600 hover:text-blue-800 text-sm font-medium flex items-center"
                aria-label="View all scheduled appointments"
              >
                View All Appointments
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="ml-1">
                  <path d="M7.5 15L12.5 10L7.5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;