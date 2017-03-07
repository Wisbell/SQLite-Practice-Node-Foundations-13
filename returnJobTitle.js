'use strict';

const { Database } = require('sqlite3').verbose();
const db = new Database('db/business.sqlite');


const returnJobTitle = (job) => {
  db.each(`SELECT firstName, lastName FROM employees WHERE jobTitle = "${job}"`, (err, row) => {
  // db.all(`SELECT firstName, lastName, jobTitle FROM employees`, (err, allRows) => {
    console.log(`All Employees whose job title is ${job}`)
    console.log(`
                First Name: ${row.firstName}
                Last Name: ${row.lastName}
      `)
  })
}

module.exports.returnJobTitle = returnJobTitle
