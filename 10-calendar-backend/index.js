const express = require('express');
require('dotenv').config();
const routerAuth = require('./routes/auth');
const { dbConnection } = require('./database/config');

// console.log(process.env);
//create server express
const app = express();

//DATA BASE
dbConnection();

//Directorio Publico
app.use(express.static('public'));

//reading and parsing boady
app.use(express.json());
const router = express.Router();
//Routers
app.use('/api/v1', router);
// app.use('/api/v1/auth', require('./routes/auth'));
router.use('/auth', routerAuth);

//TODO:  auth // create, login, renew
//TODO

//listen request
app.listen(process.env.PORT, (req, res) => {
  console.log(`Server running en port ${process.env.PORT}`);
});
