/**\
 *
 * User auth routes
 * host + api/auth
 */

const { express, Router } = require('express');
const router = Router();

const {
  createUser,
  loginUser,
  reEvaluteToken,
} = require('../controllers/auth');

router.post('/new', createUser);

router.post('/', loginUser);

router.get('/renew', reEvaluteToken);

module.exports = router;
