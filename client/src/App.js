import React, { Component } from 'react';
import './App.css';
import DoctorView from './doctorView/doctorView.js';
import Footer from './footer/footer.js';
import Login from './login/login.js';
import Navigation from './navigation/navigation.js';
import PatientView from './patientView/patientView.js';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Router>
          <div>
            <Route path="/patient/:patientId" component = { PatientView } />
            <Route exact path="/" component = { Login } />
            <Route path="/doctor/:doctorId" component = { DoctorView } />
            <Footer />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
