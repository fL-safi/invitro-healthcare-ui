import React from "react";
import Header from "../components/Header";

import AppointmentsTable from "../components/AppointmentsTable";
import { useAppointments } from "../contexts/AppointmentContext";

const Index: React.FC = () => {

      const { appointments } = useAppointments();

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <section aria-labelledby="appointments-heading" className="mt-12">
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
      
    </div>
  );
};

export default Index;
