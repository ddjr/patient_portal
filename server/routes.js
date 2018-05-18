module.exports = function(app) {
  var patients = require('./controllers/patients');
  var appointments = require('./controllers/appointments');
  var login = require('./controllers/login');

  // Patients
  app.get('/patients', patients.findAll);
  app.get('/patients/:id', patients.findById);
  app.get('/doctors/:doctorId', patients.findByDoctor);
  app.post('/patients', patients.add);
  app.put('/patients/:id', patients.update);
  app.delete('/patients/:id', patients.delete);

  // Appointments
  app.get('/patients/appointments/:patientId/', appointments.findAllAppointments);
  app.get('/patients/appointments/:patientId/:id', appointments.findAppointmentsById);
  app.post('/patients/appointments/:patientId', appointments.addAppointment);
  app.put('/patients/appointments/:patientId/:id', appointments.updateAppointment);
  app.delete('/patients/appointments/:patientId/:id', appointments.deleteAppointment);

  // Login
  app.post('login', login.authenticate);


}
