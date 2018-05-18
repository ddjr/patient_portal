import React, { Component } from 'react';
import './doctorView.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class DoctorView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: props.match.params.doctorId,
      patients: [],
    }
  }

  componentDidMount() {
     fetch(`http://localhost:5000/doctors/${this.state.id}`)
      .then((response) => response.json())
      .then((data) => {
        let patients = data.map((patient) => {
            return (
              <div key={patient._id}>
                <button>
                <Link to={`/patient/${patient._id}`} replace >{patient.name}</Link>
              </button>
              </div>
            );
          });
        this.setState({patients: patients});
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return (
      <div>
        <p>Doctor View</p>
        <div>{this.state.patients}</div>
      </div>
    );
  }
} //end class
export default DoctorView;
