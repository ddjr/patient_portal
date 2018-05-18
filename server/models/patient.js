var mongoose = require('mongoose');
Schema = mongoose.Schema;
// var ObjectIdSchema = Schema.ObjectId;
// var ObjectId = mongoose.Types.ObjectId;

var PatientSchema = new Schema({
  _id: String,
  name: String,
  age: Number,
  email: String,
  phone: String,
  address: String,
  doctorId: Number,
  doctorName: String

});
const Patient = mongoose.model('Patient', PatientSchema);
