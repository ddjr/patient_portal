var mongoose = require('mongoose');
Schema = mongoose.Schema;
var ObjectIdSchema = Schema.ObjectId;
var ObjectId = mongoose.Types.ObjectId;

var AppointmentSchema = new Schema({
  _id:    {type:ObjectIdSchema, default: function () { return new ObjectId()} },
  date: String,
  purpose: String,
  doctorId: Number,
  doctorName: String,
  patientId: String,
  isAccepted: Boolean,
  declinedMessage: String
});
const Appointment = mongoose.model('Appointment', AppointmentSchema);
