const express = require('express');
const { validationResult } = require('express-validator');

const createUser = (req, res = express.reponse) => {
  const { name, email, password } = req.body;

  //handle errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  return res.status(201).json({
    ok: true,
    msg: 'register',
    name,
    email,
    password,
  });
};

const loginUser = (req, res = express.reponse) => {
  const { email, password } = req.body;

  //handle errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

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
