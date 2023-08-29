const express = require('express');

const createUser = (req, res = express.reponse) => {
  const { name, email, password } = req.body;

  res.json({
    ok: true,
    msg: 'register',
    name,
    email,
    password,
  });
};

const loginUser = (req, res = express.reponse) => {
  const { email, password } = req.body;
  res.json({
    ok: true,
    email,
    password,
  });
};
const reEvaluteToken = (req, res = express.reponse) => {
  res.json({
    ok: true,
  });
};

module.exports = { createUser, loginUser, reEvaluteToken };
