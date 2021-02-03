const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

//Connect to db
const employeedb = mongoose.connect('mongodb://localhost:27017/employee-cli', {
	useMongoClient: true
});


//Import employee model
const Employee = require('./models/employeeModel');


// Add Employe
const addEmployee = (employee) => {
	Employee.create(employee).then(employee => {
	  console.info('New Employee Added');
	  employeedb.close();
	});
  }
  
  // Find Employee
  const findEmployee = (name) => {
	// Make case insensitive
	const search = new RegExp(name, 'i');
	Employee.find({$or: [{firstName: search}, {lastName: search}]})
	  .then(employee => {
		console.info(employee);
		console.info(`${employee.length} matches`);
		employeedb.close();
	  });
  }
  
  // Update Employee
  const updateEmployee = (_id, employee) => {
	Employee.update({ _id }, employee)
	  .then(employee => {
		console.info('Employee Updated');
		employeedb.close();
	  });
  }
  
  // Remove Employee
  const removeEmployee = (_id) => {
	Employee.remove({ _id })
	  .then(employee => {
		console.info('Employee Removed');
		employeedb.close();
	  });
  }
  
  // List Employees
  const listEmployees = () => {
	Employee.find()
	  .then(employee => {
		console.info(employee);
		console.info(`${employee.length} employees`);
		employeedb.close();
	  });
  }
  
  // Export All Methods
  module.exports = {
	addEmployee,
	findEmployee,
	updateEmployee,
	removeEmployee,
	listEmployees
  }
  