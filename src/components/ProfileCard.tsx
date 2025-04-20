import React, { useState } from 'react';
import { UserProfile } from '../types';
import { Phone, Mail, MapPin, Calendar, User, Clipboard, Heart, AlertCircle, ChevronDown, ChevronUp } from 'lucide-react';

interface ProfileCardProps {
  profile: UserProfile;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ profile }) => {
  const [expanded, setExpanded] = useState(false);
  
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      {/* Header */}
      <div className="relative h-32 bg-gradient-to-r from-blue-500 to-blue-700">
        <div className="absolute -bottom-12 left-6">
          <div className="rounded-full border-4 border-white overflow-hidden h-24 w-24">
            <img 
              src={profile.profileImage} 
              alt="" 
              className="h-full w-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = '/assets/david.png';
              }}
            />
          </div>
        </div>
      </div>
      
      {/* Basic Info */}
      <div className="pt-14 px-6 pb-6">
        <h2 className="text-2xl font-bold text-gray-800">{profile.name}</h2>
        <div className="flex flex-wrap gap-4 mt-3 text-gray-600">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-blue-600" aria-hidden="true" />
            <span>{profile.dateOfBirth} ({new Date().getFullYear() - new Date(profile.dateOfBirth).getFullYear()} years)</span>
          </div>
          <div className="flex items-center">
            <User className="h-4 w-4 mr-2 text-blue-600" aria-hidden="true" />
            <span>{profile.gender}</span>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
          <div className="flex items-center">
            <Phone className="h-5 w-5 mr-3 text-blue-600" aria-hidden="true" />
            <div>
              <p className="text-xs text-gray-500">Phone</p>
              <p className="font-medium">{profile.phone}</p>
            </div>
          </div>
          <div className="flex items-center">
            <Mail className="h-5 w-5 mr-3 text-blue-600" aria-hidden="true" />
            <div>
              <p className="text-xs text-gray-500">Email</p>
              <p className="font-medium">{profile.email}</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Divider */}
      <div className="border-t border-gray-200"></div>
      
      {/* Medical Info Summary */}
      <div className="px-6 py-4">
        <div className="flex justify-between items-center">
          <h3 className="text-lg font-semibold text-gray-800">Medical Information</h3>
          <button 
            className="text-blue-600 hover:text-blue-800 flex items-center focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-md p-1"
            onClick={() => setExpanded(!expanded)}
            aria-expanded={expanded}
            aria-controls="medical-info-details"
          >
            {expanded ? (
              <>
                <span className="text-sm mr-1">Less</span>
                <ChevronUp className="h-4 w-4" />
              </>
            ) : (
              <>
                <span className="text-sm mr-1">More</span>
                <ChevronDown className="h-4 w-4" />
              </>
            )}
          </button>
        </div>
        
        <div className="grid grid-cols-2 gap-3 mt-3">
          <div className="bg-gray-50 p-3 rounded-md">
            <p className="text-xs text-gray-500">Blood Type</p>
            <p className="font-medium">{profile.bloodType}</p>
          </div>
          <div className="bg-gray-50 p-3 rounded-md">
            <p className="text-xs text-gray-500">Weight</p>
            <p className="font-medium">{profile.weight}</p>
          </div>
        </div>
        
        {/* Expandable medical details */}
        <div 
          id="medical-info-details" 
          className={`transition-all duration-300 overflow-hidden ${expanded ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'}`}
        >
          <div className="mt-4 space-y-4">
            <div>
              <div className="flex items-center mb-2">
                <AlertCircle className="h-4 w-4 mr-2 text-red-500" aria-hidden="true" />
                <h4 className="font-medium text-gray-800">Allergies</h4>
              </div>
              {profile.allergies.length > 0 ? (
                <ul className="ml-6 list-disc space-y-1">
                  {profile.allergies.map((allergy, index) => (
                    <li key={index} className="text-gray-600">{allergy}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 ml-6">No known allergies</p>
              )}
            </div>
            
            <div>
              <div className="flex items-center mb-2">
                <Clipboard className="h-4 w-4 mr-2 text-blue-600" aria-hidden="true" />
                <h4 className="font-medium text-gray-800">Current Medications</h4>
              </div>
              {profile.medications.length > 0 ? (
                <ul className="ml-6 list-disc space-y-1">
                  {profile.medications.map((medication, index) => (
                    <li key={index} className="text-gray-600">{medication}</li>
                  ))}
                </ul>
              ) : (
                <p className="text-gray-600 ml-6">No current medications</p>
              )}
            </div>
            
            <div>
              <div className="flex items-center mb-2">
                <Heart className="h-4 w-4 mr-2 text-blue-600" aria-hidden="true" />
                <h4 className="font-medium text-gray-800">Insurance</h4>
              </div>
              <div className="ml-6 grid grid-cols-1 gap-2">
                <div>
                  <p className="text-xs text-gray-500">Provider</p>
                  <p className="text-gray-600">{profile.insuranceProvider}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Policy Number</p>
                  <p className="text-gray-600">{profile.insuranceNumber}</p>
                </div>
              </div>
            </div>
            
            <div>
              <div className="flex items-center mb-2">
                <Phone className="h-4 w-4 mr-2 text-blue-600" aria-hidden="true" />
                <h4 className="font-medium text-gray-800">Emergency Contact</h4>
              </div>
              <div className="ml-6 grid grid-cols-1 gap-2">
                <div>
                  <p className="text-xs text-gray-500">Name</p>
                  <p className="text-gray-600">{profile.emergencyContact.name}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Relationship</p>
                  <p className="text-gray-600">{profile.emergencyContact.relationship}</p>
                </div>
                <div>
                  <p className="text-xs text-gray-500">Phone</p>
                  <p className="text-gray-600">{profile.emergencyContact.phone}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Actions */}
      <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
        <div className="flex justify-between">
          <button 
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="Edit profile information"
          >
            Edit Profile
          </button>
          <button 
            className="px-4 py-2 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="View medical records"
          >
            Medical Records
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;