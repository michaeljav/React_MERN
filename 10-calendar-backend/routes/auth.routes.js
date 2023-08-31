/**\
 *
 * User auth routes
 * host + api/auth
 */

const { express, Router } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-field');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

const {
  createUser,
  loginUser,
  reEvaluteToken,
} = require('../controllers/auth.controllers');

router.post(
  '/new',
  [
    //middleware
    check('name', 'The name is required').not().isEmpty(),
    check('email', 'The email is required').isEmail().not().isEmpty(),
    check('password', 'The password should be 6 characters').isLength({
      min: 6,
    }),
    validateFields,
  ],
  createUser
);

router.post(
  '/',
  [
    //middleware
    check('email', 'The email is required').isEmail().not().isEmpty(),
    check('password', 'The password should be 6 characters').isLength({
      min: 6,
    }),
    validateFields,
  ],
  loginUser
);

router.get('/renew', validateJWT, reEvaluteToken);

module.exports = router;
