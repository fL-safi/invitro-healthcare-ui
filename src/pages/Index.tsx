import React, { useState } from "react";
import Header from "../components/Header";
import FilterBar from "../components/FilterBar";
import DoctorCard from "../components/DoctorCard";
import AppointmentModal from "../components/AppointmentModal";
import AppointmentsTable from "../components/AppointmentsTable";
import { useAppointments } from "../contexts/AppointmentContext";
import { Doctor } from "../types";

const Index: React.FC = () => {
  const { filteredDoctors, addAppointment, appointments } = useAppointments();
  const [selectedDoctor, setSelectedDoctor] = useState<Doctor | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleBookAppointment = (doctorId: string) => {
    const doctor = filteredDoctors.find((doc) => doc.id === doctorId);
    if (doctor) {
      setSelectedDoctor(doctor);
      setIsModalOpen(true);
    }
  };

  const handleConfirmAppointment = (
    doctorId: string,
    date: string,
    time: string
  ) => {
    addAppointment(doctorId, date, time);
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <div className="relative bg-white-300">
        <div className="absolute inset-0 bg-black/25 mix-blend-overlay" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="text-black space-y-6">
              <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                Your Health, Our Priority
              </h1>
              <p className="text-lg md:text-xl text-black-100">
                Book appointments with top healthcare professionals in your
                area. Quick, easy, and secure scheduling at your fingertips.
              </p>
              <div className="flex gap-4">
                <div className="flex items-center gap-2">
                  <div className="bg-black/20 p-2 rounded-lg">
                    <svg
                      className="w-6 h-6 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-black">
                    <div className="text-2xl font-bold">100+</div>
                    <div className="text-black-100 text-sm">Doctors</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="bg-black/20 p-2 rounded-lg">
                    <svg
                      className="w-6 h-6 text-black"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div className="text-black">
                    <div className="text-2xl font-bold">10k+</div>
                    <div className="text-black-100 text-sm">Appointments</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden md:block">
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=2000"
                alt="Doctor with patient"
                className="rounded-lg shadow-xl object-cover h-[400px] w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <FilterBar />

        <section aria-labelledby="doctors-heading">
          <h2
            id="doctors-heading"
            className="text-2xl font-bold text-gray-900 mb-6"
          >
            Available Doctors
          </h2>

          {filteredDoctors.length === 0 ? (
            <div className="bg-white rounded-lg shadow-sm p-8 text-center">
              <p className="text-gray-500">
                No doctors found matching your criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredDoctors.map((doctor) => (
                <DoctorCard
                  key={doctor.id}
                  doctor={doctor}
                  onBookAppointment={handleBookAppointment}
                />
              ))}
            </div>
          )}
        </section>

        <section aria-labelledby="appointments-heading" className="my-12">
          <h2
            id="appointments-heading"
            className="text-2xl font-bold text-gray-900 mb-6"
          >
            My Appointments
          </h2>
          <div className="bg-white rounded-lg shadow-sm overflow-hidden">
            <AppointmentsTable appointments={appointments} />
          </div>
        </section>
      </main>

      <AppointmentModal
        doctor={selectedDoctor}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onConfirm={handleConfirmAppointment}
      />
    </div>
  );
};

export default Index;
