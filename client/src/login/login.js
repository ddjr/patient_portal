import React, { Component } from 'react';
import { Button, FormGroup, FormControl, ControlLabel } from 'react-bootstrap';
import './login.css';

export default class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    var doctorEmail1 = "drbrown@gmail.com";
    var doctorEmail2 = "drsmith@gmail.com";
    var patientEmail1 = "wayne@gmail.com";
    var patientEmail2 = "olivia@gmail.com";
    event.preventDefault();
    if(this.state.email == doctorEmail1) {
      window.location.href="http://localhost:3000/doctor/1";
    } else if (this.state.email == doctorEmail2) {
      window.location.href="http://localhost:3000/doctor/2";
    } else if (this.state.email == patientEmail1) {
      window.location.href="http://localhost:3000/patient/1";
    } else if (this.state.email == patientEmail2) {
      window.location.href="http://localhost:3000/patient/4";
    } else {
      alert("incorrect email or password");
    }
  }

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>

          <FormGroup controlId="email" bsSize="large">
            <ControlLabel>Email</ControlLabel>
            <FormControl autoFocus type='email' value={this.state.email} onChange={this.handleChange} />
          </FormGroup>

          <FormGroup controlId="password" bsSize="large">
            <ControlLabel>Password</ControlLabel>
            <FormControl value={this.state.password} onChange={this.handleChange} type='password' />
          </FormGroup>

          <button block bsSize="large" disabled={!this.validateForm()} type="submit">Login</button>
        </form>
      </div>
    );
  }
}
// export default Login;
