import React, { Component }from 'react';
import './patientView.css';
import PatientInfo from '../patientInfo/patientInfo.js';
import Appointments from '../appointments/appointments.js';
// id : 5aabe29e6424690f439c3dec
class PatientView extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.state = {
      id: props.match.params.patientId,
      patient: {},
      appointments: {}
    }
    console.log(this.state.id);
  }
  update
  componentDidMount() {
   fetch(`http://localhost:5000/patients/${this.state.id}`)
    .then((response) => response.json())
    .then((data) => {
      if (data == []) { return; }
      this.setState({
        patient: data[0]
      });
    })
    .catch((error) => {
      console.error(error);
    });
    fetch(`http://localhost:5000/patients/appointments/${this.state.id}`)
     .then((response) => response.json())
     .then((data) => {
       if (data == []) { return; }
       this.setState({
         appointments: data[0]
       });
     })
     .catch((error) => {
       console.error(error);
     });
  }

  render() {
    return (
      <div className="patientView">
        <PatientInfo patient={this.state.patient}/>
        <Appointments  appointment={this.state.appointments}/>
        <p className="patient-files">Patient Files</p>
      </div>
    );
  }
}
export default PatientView;
