import React from 'react';
import Proptypes from 'prop-types';

const AppointmentList = ({appointment, deleteAppointment}) => {

    const {pet, family, date, hour, symptom} = appointment;

    return (
        <div className="cita">
            <p>Mascota: <span>{pet}</span></p>
            <p>Familiar: <span>{family}</span></p>
            <p>Fecha: <span>{date}</span></p>
            <p>Hora: <span>{hour}</span></p>
            <p>Sintomas: <span>{symptom}</span></p>

            <button 
                onClick={() => deleteAppointment(appointment.id)}
                className="button eliminar u-full-width"
            >
                Eliminar &times;
            </button>
        </div>
    )
}

AppointmentList.propTypes = {
    appointment: Proptypes.object.isRequired,
    deleteAppointment: Proptypes.func.isRequired
}

export default AppointmentList;
