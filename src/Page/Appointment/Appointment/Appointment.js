import React, { useState } from 'react';
import AvailableAppointments from '../../AvailableAppointments/AvailableAppointments';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import AboutBookings from '../../../NewSections/AboutBookings/AboutBookings';

const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date())

    return (
        <div>
            <AppointmentBanner selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AppointmentBanner>

            <AvailableAppointments
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
            ></AvailableAppointments>

            <div>
                <AboutBookings></AboutBookings>
            </div>
        </div>
    );
};

export default Appointment;