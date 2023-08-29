/**\
 *
 * User auth routes
 * host + api/auth
 */

const { express, Router } = require('express');
const { check } = require('express-validator');
const router = Router();

const {
  createUser,
  loginUser,
  reEvaluteToken,
} = require('../controllers/auth');

router.post(
  '/new',
  [
    //middleware
    check('name', 'The name is required').not().isEmpty(),
    check('email', 'The email is required').isEmail().not().isEmpty(),
    check('password', 'The password should be 6 characters').isLength({
      min: 6,
    }),
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
  ],
  loginUser
);

router.get('/renew', reEvaluteToken);

module.exports = router;
