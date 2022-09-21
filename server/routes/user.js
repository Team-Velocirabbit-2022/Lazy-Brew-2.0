const express = require('express');
const router = express.Router();
const usersController = require('../controllers/usersController');

router.post('/new_user', usersController.createNewUser,  (req, res) => {
  res.status(200).json(res.locals.userId);
});

router.post('/login', usersController.verifyUser,  (req, res) => {
  res.status(200).json(res.locals.userId);
});

module.exports = router;