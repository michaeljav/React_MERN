const express = require('express');
require('dotenv').config();

console.log(process.env);
//create server express
const app = express();

//Directorio Publico
app.use(express.static('public'));

//Routers
app.use('/api/v1/auth', require('./routes/auth'));

//TODO:  auth // create, login, renew
//TODO

//listen request
app.listen(process.env.PORT, (req, res) => {
  console.log(`Server running en port ${process.env.PORT}`);
});
