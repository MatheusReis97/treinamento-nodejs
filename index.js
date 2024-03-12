const {Person} = require("./person")
const dotenv = require ('dotenv');
const connectToDatabase = require('./src/database/connect');

dotenv.config();


connectToDatabase(); // devesse está após o dotenv, por causa das configurações;




// require('./modulos/path');
// require ('./modulos/fs');
// require ('./modulos/http');

require ('./modulos/express');


const person = new Person ("Matheus");

// console.log(person.sayMyname());

