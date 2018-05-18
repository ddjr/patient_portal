import React from 'react';
import './appointments.css';

function Appointments(props) {
  return (
    <div className="appointment" >
      <ul>
        <li>
          <div >
            <p>Appointment: {props.appointment.date}</p>
            <p>Purpose: {props.appointment.purpose}</p>
            <p>Doctor: {props.appointment.doctorName}</p>
          </div>
          {/* <button>Update</button>
          <button>Delete</button> */}
        </li>
      </ul>

      {/* <button>Add Appointment</button> */}
    </div>
  );
}
export default Appointments;
