const { response } = require('express');
const Event = require('../models/event.model');

const getEvents = (req, res = response) => {
  //
  return res.json({ ok: true, msg: 'getEvents' });
};

const createEvent = async (req, res = response) => {
  const event = new Event(req.body);
  try {
    event.user = req.uid;
    const eventSaved = await event.save();

    return res.json({ ok: true, event: eventSaved });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Please contact the administrator',
    });
  }
};

const updateEvent = (req, res = response) => {
  return res.json({ ok: true, msg: 'updateEvent' });
};
const deleteEvent = (req, res = response) => {
  return res.json({ ok: true, msg: 'deleteEvent' });
};

module.exports = {
  createEvent,
  deleteEvent,
  getEvents,
  updateEvent,
};
