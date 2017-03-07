'use strict';

// require sqlite3 to interact with db

const { Database } = require('sqlite3').verbose();
const { returnJobTitle } = require('./returnJobTitle.js')
const { addEmployees } = require('./addEmployees.js')
// const coolModule = require('./returnJobTitle.js')

// create new db - file must exist first
const db = new Database('db/business.sqlite');

// Create schema for employees
db.run("CREATE TABLE IF NOT EXISTS employees (id INT, firstName TEXT, lastName TEXT, jobTitle TEXT, address TEXT, salary INT)");


let array = [
  { id: 1, firstName: 'Fred', lastName: 'Smith', jobTitle: 'Cashier', address: '500 Somewhere Drive', salary: 1000 },
  { id: 2, firstName: 'Sarah', lastName: 'Johanson', jobTitle: 'Owner', address: '200 Somewhere Lane', salary: 1000 },
  { id: 3, firstName: 'Dudeskie', lastName: 'Blunderbus', jobTitle: 'Janitor', address: '100 Somewhere Lane', salary: 1000 },
  { id: 4, firstName: 'Dog', lastName: 'BountyHunter', jobTitle: 'Bounty Hunter', address: '300 Somewhere Lane', salary: 1000 },
  { id: 5, firstName: 'Johnny', lastName: 'Goode', jobTitle: 'Musician', address: '400 Somewhere Lane', salary: 1000 },
  { id: 6, firstName: 'Fred', lastName: 'WhatsHisFace', jobTitle: 'Dont Even Know', address: '600 Somewhere Lane', salary: 1000 }
];

// const addEmployees = () => {
//   array.forEach( obj => {
//     console.log(obj)
//     db.run(`INSERT INTO employees VALUES (
//       ${obj.id},
//       "${obj.firstName}",
//       "${obj.lastName}",
//       "${obj.jobTitle}",
//       "${obj.address}",
//       ${obj.salary})
//       `)
//   })
// };

// addEmployees()

// Write a statement to query the database and console.log() all employee records.

  // db.all(`SELECT * FROM employees`, (err, allRows) => {
  //   allRows.forEach( each => {
  //     console.log(`
  //       Employee Info
  //         ID: ${each.id}
  //         First Name: ${each.firstName}
  //         Last Name: ${each.lastName}
  //         Title: ${each.jobTitle}
  //         Address: ${each.address}
  //         Salary: ${each.salary}
  //       `)
  //   })
  // })

// Write a statement to query the database and console.log() each employees jobTitle.

  // db.each(`SELECT jobTitle FROM employees`, (err, { jobTitle }) => {
  //   console.log(jobTitle)
  // })

// Write a statement to query the database and console.log() each employees firstName, lastName and address only.


  // db.each(`SELECT firstName, lastName, address FROM employees`, (err, { firstName, lastName, address}) => {
  //   console.log(`
  //               First Name: ${firstName}
  //               Last Name: ${lastName}
  //               Address: ${address}
  //               `)
  // })


// Write a statement that returns all employees of a certain jobTitle.

// const returnJobTitle = (job) => {
//   db.each(`SELECT firstName, lastName FROM employees WHERE jobTitle = "${job}"`, (err, row) => {
//   // db.all(`SELECT firstName, lastName, jobTitle FROM employees`, (err, allRows) => {
//     console.log(`All Employees whose job title is ${job}`)
//     console.log(`
//                 First Name: ${row.firstName}
//                 Last Name: ${row.lastName}
//       `)
//   })
// }

returnJobTitle("Owner")
returnJobTitle("Cashier")
returnJobTitle("Bounty Hunter")
