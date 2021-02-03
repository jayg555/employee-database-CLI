#!/usr/bin/env node
const program = require('commander');
const { prompt } = require('inquirer');
const {
  addEmployee,
  findEmployee,
  updateEmployee,
  removeEmployee,
  listEmployees
} = require('./index');

// Customer Questions
const questions = [
  {
    type: 'input',
    name: 'firstName',
    message: 'Employee First Name'
  },
  {
    type: 'input',
    name: 'lastName',
    message: 'Employee Last Name'
  },
  {
    type: 'input',
    name: 'phone',
    message: 'Employee Phone Number'
  },
  {
    type: 'input',
    name: 'email',
    message: 'Employee Email Address'
  }
];

program 
  .version('1.0.0')
  .description('Employee Management System')


// Add Command
program
  .command('add')
  .alias('a')
  .description('Add a Employee')
  .action(() => {
	prompt(questions)
	.then(answers => addEmployee(answers));
  });

// Find Command
program
  .command('find <name>')
  .alias('f')
  .description('Find a Employee')
  .action(name => findEmployee(name));

// Update Command
program
  .command('update <_id>')
  .alias('u')
  .description('Update a Employee')
  .action(_id => {
    prompt(questions).then(answers => updateEmployee(_id, answers));
  });

// Remove Command
program
  .command('remove <_id>')
  .alias('r')
  .description('Remove a Employee')
  .action(_id => removeEmployee(_id));

// List Command
program
  .command('list')
  .alias('l')
  .description('List all Employees')
  .action(() => listEmployees());

program.parse(process.argv);