var mongoose = require('mongoose');
Appointment = mongoose.model('Appointment');

exports.findAllAppointments = function(req, res) {
  var patientId = req.params.patientId;
  Appointment.find({patientId: patientId}, function(err, results) {
    return res.send(results);
  });
};
exports.findAppointmentsById = function(req, res) {
  var patientId = req.params.patientId;
  var id = req.params.id;
  Appointment.find({patientId: patientId, _id: id}, function(err, results) {
    return res.send(results);
  });
};
exports.updateAppointment = function(req, res) {
  var id = req.params.id;
  var updates = req.body;

  Appointment.update({"_id":id}, req.body,
    function (err, numberAffected) {
      if (err) return console.log(err);
      console.log('Updated %d Appointment', numberAffected);
      return res.send(202);
  });
};
exports.addAppointment = function(req, res) {
  var patientId = req.params.patientId;

  req.body['patientId'] = patientId;
  console.log(req.body);
  Appointment.create(req.body, function (err, appointment) {
    if (err) { return console.log(err); }
    return res.send(appointment);
  });

};
exports.deleteAppointment = function(req, res) {
  var patientId = req.params.patientId;
  var id = req.params.id;
  Appointment.remove({'_id': id}, function(result) {
    return res.send(result);
  });
};
