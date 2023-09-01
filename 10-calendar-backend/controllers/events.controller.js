const { response } = require('express');
const Event = require('../models/event.model');

const getEvents = async (req, res = response) => {
  const events = await Event.find().populate('user', 'name ');
  return res.json({ ok: true, events });
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

const updateEvent = async (req, res = response) => {
  const eventId = req.params.id;

  const uid = req.uid;
  try {
    // const events = await Event.findById(eventId).populate('user', 'name ');
    const event = await Event.findById(eventId);
    //if not exists
    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: 'Event not found ',
      });
    }

    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: 'do not have permission ',
      });
    }

    const eventToUpdate = {
      ...req.body,
      user: uid,
    };

    // event.user = req.uid;
    const eventUpdated = await Event.findByIdAndUpdate(eventId, eventToUpdate, {
      new: true,
    });

    return res.json({ ok: true, event: eventUpdated });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Please contact the administrator',
    });
  }
};
const deleteEvent = async (req, res = response) => {
  const eventId = req.params.id;

  const uid = req.uid;
  try {
    // const events = await Event.findById(eventId).populate('user', 'name ');
    const event = await Event.findById(eventId);
    //if not exists
    if (!event) {
      return res.status(404).json({
        ok: false,
        msg: 'Event not found ',
      });
    }

    if (event.user.toString() !== uid) {
      return res.status(401).json({
        ok: false,
        msg: 'do not have permission ',
      });
    }

    // event.user = req.uid;
    await Event.findByIdAndDelete(eventId);

    return res.json({ ok: true });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      ok: false,
      msg: 'Please contact the administrator',
    });
  }
};

module.exports = {
  createEvent,
  deleteEvent,
  getEvents,
  updateEvent,
};
