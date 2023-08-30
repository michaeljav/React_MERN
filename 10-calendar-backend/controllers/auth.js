const express = require('express');
const User = require('../models/user.model');

const createUser = async (req, res = express.reponse) => {
  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    console.log(user);

    if (user) {
      return res.status(400).json({
        ok: false,
        msg: 'User already exists',
      });
    }

    //save in database
    user = new User(req.body);
    await user.save();

    return res.status(201).json({
      ok: true,
      uid: user.id,
      name: user.name,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Please contact the administrator',
    });
  }
};

const loginUser = (req, res = express.reponse) => {
  const { email, password } = req.body;
  res.status(201).json({
    ok: true,
    email,
    password,
  });
};

const reEvaluteToken = (req, res = express.reponse) => {
  res.status(201).json({
    ok: true,
  });
};

module.exports = { createUser, loginUser, reEvaluteToken };
