import React from 'react';
import './patientInfo.css';

function PatientInfo(props) {
  return (
    <div>
      <p>Name: {props.patient.name}</p>
      <p>Age: {props.patient.age}</p>
      <p>Email: {props.patient.email}</p>
      <p>Address: {props.patient.address}</p>
      <p>Phone: {props.patient.phone}</p>
      <p>Doctor: {props.patient.doctorName}</p>
    </div>
  );
}
export default PatientInfo;
