const mongoose = require('mongoose');

const dbConnection = async () => {
  try {
    console.log('michael ', process.env.DB_CNN);
    await mongoose.connect(process.env.DB_CNN);

    console.log('DB connected successfully');
  } catch (error) {
    console.log(error);
    throw new Error('Error connecting to Mongo database');
  }
};

module.exports = { dbConnection: dbConnection };
