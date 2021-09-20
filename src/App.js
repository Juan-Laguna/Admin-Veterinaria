import React, { useState, useEffect } from 'react';
import Form from './components/Form';
import AppointmentList from './components/AppointmentList';



const App = () => {

  // Citas en LocalStorage

  let previousAppointments = JSON.parse(localStorage.getItem('appointments'));
  if (!previousAppointments) {
    previousAppointments = [];
  }

  const [appointments, setappointments] = useState([previousAppointments]);

  useEffect(() => {
    if (previousAppointments) {
      localStorage.setItem('citas', JSON.stringify(appointments))
    } else {
      localStorage.setItem('citas', JSON.stringify([]))
    }
  }, [appointments, previousAppointments])

  // Funcion que lista las citas actuales y agrega las nuevas
  const createAppointment = appointment => {
    setappointments([...appointments, appointment])
  }

  // Funcion que elimina una cita por su id
  const deleteAppointment = id => {
      const newAppointments = appointments.filter(appointment => appointment.id !== id);
      setappointments(newAppointments);
  }

  // Mensaje condicional
  const title = appointments.length === 0 ? 'No hay citas' : 'Administrador de citas'

  return (
    <>
      <h1>Administrador de pacientes</h1>
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Form
              createAppointment={createAppointment}
            />
          </div>
          <div className="one-half column">
            <h2>{title}</h2>
            {appointments.map(appointment => (
              <AppointmentList
                key={appointment.id}
                appointment={appointment}
                deleteAppointment={deleteAppointment}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
