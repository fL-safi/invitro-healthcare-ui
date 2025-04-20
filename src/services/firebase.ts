import axios from 'axios';
import { Doctor, AppointmentWithDoctor } from '../types';

const API_BASE_URL = 'https://invitro-health-care-default-rtdb.firebaseio.com';

export const fetchAppointments = async (): Promise<AppointmentWithDoctor[]> => {
  try {
    const response = await axios.get(`${API_BASE_URL}/appointments.json`);
    
    if (!response.data) return [];
    
    // Convert Firebase object format to array
    return Object.keys(response.data).map(key => ({
      ...response.data[key],
      id: response.data[key].id || key, // Use existing id or Firebase key
    }));
  } catch (error) {
    console.error('Error fetching appointments:', error);
    return [];
  }
};

export const addAppointmentToFirebase = async (appointment: AppointmentWithDoctor): Promise<string | null> => {
  try {
    const response = await axios.post(`${API_BASE_URL}/appointments.json`, appointment);
    return response.data.name; // Firebase returns the generated key
  } catch (error) {
    console.error('Error adding appointment:', error);
    return null;
  }
};