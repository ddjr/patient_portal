var mongoose = require('mongoose');
Patient = mongoose.model('Patient');


exports.findAll = function(req, res) {
  Patient.find({}, function(err, results) {
    return res.send(results);
  });
};
exports.findById = function(req, res) {
  var id = req.params.id;
  Patient.find({'_id': id}, function(err, results) {
    return res.send(results);
  });
};
exports.findByDoctor = function(req, res) {
  var doctorId = req.params.doctorId;
  Patient.find({doctorId: doctorId}, function(err, results) {
    return res.send(results);
  });
};
exports.add = function(req, res) {
  Patient.create(req.body, function (err, patient) {
    if (err) { return console.log(err); }
    return res.send(patient);
  });
};
exports.update = function(req, res) {
  var id = req.params.id;
  var updates = req.body;

  Patient.update({"_id":id}, req.body,
    function (err, numberAffected) {
      if (err) return console.log(err);
      console.log('Updated %d patients', numberAffected);
      return res.send(202);
  });
}
exports.delete = function(req, res) {
  var id = req.params.id;
  Patient.remove({'_id': id}, function(result) {
    return res.send(result);
  });
};

// importData
exports.importData = function(req, res) {
  require('../mockdata');
};
