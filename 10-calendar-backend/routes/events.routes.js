/**
 *  Events Routes
 *  /api/v1/events
 */

const { Router } = require('express');
const { check } = require('express-validator');
const { isDate } = require('../helpers/isDate');
const { validateFields } = require('../middlewares/validate-field');
const { validateJWT } = require('../middlewares/validate-jwt');
const {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} = require('../controllers/events.controller');
const router = Router();

//all request has to pass through validation of jwt token
router.use(validateJWT);

//get event
router.get('/', getEvents);

//create event
router.post(
  '/',
  [
    check('title', 'The title is required').not().isEmpty(),
    check('start', 'The start is required').custom(isDate),
    check('end', 'The end is required').custom(isDate),
    validateFields,
  ],
  createEvent
);

//update event
router.put('/:id', updateEvent);

//update event
router.delete('/:id', deleteEvent);

module.exports = router;
