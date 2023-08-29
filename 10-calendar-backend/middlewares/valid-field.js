const express = require('express');
const { validationResult } = require('express-validator');

const validFields = (req, res = express.response, next) => {
  //handle errors
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    return res.status(400).json({
      ok: false,
      errors: errors.mapped(),
    });
  }

  next();
};

module.exports = {
  validFields,
};
