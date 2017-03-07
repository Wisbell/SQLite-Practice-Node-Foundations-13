'use strict';

const { Database } = require('sqlite3').verbose();
const db = new Database('db/business.sqlite');


const addEmployees = () => {
  array.forEach( obj => {
    console.log(obj)
    db.run(`INSERT INTO employees VALUES (
      ${obj.id},
      "${obj.firstName}",
      "${obj.lastName}",
      "${obj.jobTitle}",
      "${obj.address}",
      ${obj.salary})
      `)
  })
};


module.exports.addEmployees = addEmployees
