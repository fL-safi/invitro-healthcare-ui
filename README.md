# Healthcare WebApp - ReactJS

A simple, responsive healthcare UI built with **ReactJS**, **TailwindCSS**, **RadixUI**, and **TypeScript**. This app allows users to browse through doctors' profiles, book appointments, and manage their bookings. The app is fully mobile-responsive and accessible.

## Demo

You can view the live demo of the app on [Vercel](https://invitro-healthcare-ui.vercel.app/)

You can check out the Figma design here [Figma](https://www.figma.com/design/V2BcJehYFzMJSb4fjTS6sH/Health-Care-UI?node-id=1-69&t=8UnIgYX5wMcWl1jA-0).

## Features

- **Main Page**: A landing page with a hero section showcasing the doctors' information.
- **Doctors' Cards**: Each card displays the doctor's name, speciality, rating, and availability.
- **Booking Modal**: Users can book an appointment by selecting a date and time. A booking summary card is displayed with options to confirm or cancel.
- **Appointment List**: After booking, users can see their list of appointments.
- **Filters**: Filters for doctor availability and speciality are available.
- **Search Functionality**: Users can search for a specific doctor by name and speciality.
- **Profile Page**: A profile page is available for users to manage their information.
- **Mobile Responsive & Accessible**: The app is designed to work seamlessly across devices and is fully accessible.

## Tech Stack

- **Frontend**: ReactJS, TailwindCSS, RadixUI, TypeScript
- **State Management**: Context API
- **Design**: Figma UX Pilot Plugin (AI-powered design tool)
- **Dummy Data**: Generated using Claude Sonnet 3.7 for realistic data population.

## Setup Instructions

1. **Clone the repository**:

   ```bash
   git clone https://github.com/fL-safi/invitro-healthcare-ui.git
   cd invitro-healthcare-ui



2. **Install Dependencies:**

Ensure you have npm installed. Then, run the following command to install all required dependencies:

npm install


Once the dependencies are installed, run the following command to start the development server:

npm run dev
The app will be accessible at http://localhost:3000.



To build the app for production, run:

npm run build

The app has been deployed on Vercel. You can view the live version of the app on this link.

## How AI Tools Were Used
Figma UX Pilot Plugin: I used the Figma UX Pilot Plugin, which utilizes AI to assist in designing intuitive and user-friendly interfaces. This AI tool helped create a cohesive layout and structure for the app's UI. You can check out the Figma design below.
[Figma](https://www.figma.com/design/V2BcJehYFzMJSb4fjTS6sH/Health-Care-UI?node-id=1-69&t=8UnIgYX5wMcWl1jA-0).

Claude Sonnet 3.7: Generated realistic dummy data, including doctors' profiles, appointments, and user details, to simulate real-world interactions within the app. The AI-generated data was used to populate the doctor's profiles, appointment availability, and user details.

## Workflow & Navigation
The app has a straightforward structure designed to enhance user experience and streamline appointment booking:

Main Page:

The landing page consists of a hero section that introduces the app.

Doctors' Cards: Below the hero section, there are multiple doctor cards. Each card displays:

Doctor's Name

Specialty

Rating

Availability

A "Book Appointment" button

Booking Modal:

Clicking the "Book Appointment" button on any doctor’s card opens a modal.

In the modal, users can select a date and time for the appointment.

A booking summary card appears below the modal, displaying the selected date and time, with options to confirm or cancel the booking.

Appointment List:

After booking an appointment, users can view their list of appointments in a separate section accessible through a "My Appointments" link.

Filters:

Users can filter doctors by availability or specialty using the filter dropdowns placed above the doctor cards.

Search Functionality:

There is a search bar where users can search for a specific doctor by their name.

Profile Page:

Users can access their Profile Page by clicking on the "Profile" link in the navigation bar.

On the profile page, users can manage their personal details and appointments.

The app is fully mobile-responsive and accessible, ensuring a seamless experience across devices.

## Known Limitations & Next Steps
Limitations
The app is built using dummy data, and no backend is currently implemented.

It uses simple state management (Context API), which works well for this small-scale app but may need to be enhanced for more complex applications.

The app does not include features like authentication or advanced user roles, which limits its scalability for real-world applications.

## Next Steps
Backend Implementation: Implement a dedicated backend using Node.js and ExpressJS for handling user data, doctor profiles, and appointment management.

Authentication System: Create an authentication system for users, including roles like doctors, patients, and admins.

Database Integration: Replace the dummy data with a real database (e.g., MongoDB or PostgreSQL) for persistent data storage.

Real-Time Features: Introduce real-time features such as appointment availability updates and notifications for users.
