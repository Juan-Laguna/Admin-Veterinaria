import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Proptypes from 'prop-types';

const Form = ({ createAppointment }) => {

    const [appointment, setappointment] = useState({
        pet: '',
        family: '',
        date: '',
        hour: '',
        symptom: ''
    });

    const [error, seterror] = useState(false);

    const handleChange = e => {
        setappointment({
            ...appointment,
            [e.target.name]: e.target.value
        })
    }


    const { pet, family, date, hour, symptom } = appointment;


    const onSubmit = e => {
        e.preventDefault();

        // Validar
        if (pet.trim() === '' || family.trim() === '' || date.trim() === '' || hour.trim() === '' || symptom.trim() === '') {
            seterror(true);
            return;
        }

        // Eliminar el mensaje de error
        seterror(false);

        // Asignar un id
        appointment.id = uuidv4();

        // Crear la cita
        createAppointment(appointment)

        // Reiniciar el fomr
        setappointment({
            pet: '',
            family: '',
            date: '',
            hour: '',
            symptom: ''
        })
    }

    return (
        <>
            <h2>Crear Cita</h2>

            {error ? <p className="alerta-error">Todos los Campos son obligatorios</p> : null}

            <form
                onSubmit={onSubmit}
            >
                <label htmlFor="pet">Nombre de la Mascota:</label>
                <input
                    type="text"
                    name="pet"
                    id="pet"
                    className="u-full-width"
                    placeholder="Nombre de la mascota"
                    onChange={handleChange}
                    value={pet}
                />
                <label htmlFor="family">Nombre del Familiar:</label>
                <input
                    type="text"
                    name="family"
                    id="family"
                    className="u-full-width"
                    placeholder="Nombre del familiar"
                    onChange={handleChange}
                    value={family}
                />
                <label htmlFor="date">Fecha:</label>
                <input
                    type="date"
                    name="date"
                    id="date"
                    className="u-full-width"
                    onChange={handleChange}
                    value={date}
                />
                <label htmlFor="hour">Hora:</label>
                <input
                    type="time"
                    name="hour"
                    id="hour"
                    className="u-full-width"
                    onChange={handleChange}
                    value={hour}
                />
                <label htmlFor="symptom">Sintomas:</label>
                <textarea
                    name="symptom"
                    id="symptom"
                    className="u-full-width"
                    onChange={handleChange}
                    value={symptom}
                ></textarea>

                <button
                    type="submit"
                    className="u-full-width button-primary"
                >
                    Agregar Cita
                </button>
            </form>
        </>
    )
}

Form.propTypes = {
    createAppointment: Proptypes.func.isRequired
}

export default Form
