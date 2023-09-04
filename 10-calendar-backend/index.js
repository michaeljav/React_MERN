const express = require('express');
require('dotenv').config();
const cors = require('cors');
const { dbConnection } = require('./database/config');

const routerAuth = require('./routes/auth.routes');
const routerEvents = require('./routes/events.routes');

// console.log(process.env);
//create server express
const app = express();

//cors
app.use(cors());

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
router.use('/events', routerEvents);

//si al  hacer un refresh en  .../auth/login para que entre aqui. y devuelva el index
app.get('*', (req, res) => {
  //path inicial __dirname
  res.sendFile(__dirname + '/public/index.html');
});
//TODO:  auth // create, login, renew
//TODO

//listen request
app.listen(process.env.PORT, (req, res) => {
  console.log(`Server running en port ${process.env.PORT}`);
});
