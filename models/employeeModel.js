const mongoose = require('mongoose');


const employeeSchema = mongoose.Schema({
	firstName: { type: String },
	lastName: { type:String},
	phone: { type: String},
	email: { type:String},
	});

	module.exports = mongoose.model('Employee', employeeSchema);