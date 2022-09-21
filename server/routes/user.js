const express = require('express');
const router = express.Router();
const userController = require('server/controllers/userController.js');

router.post('/new_user', userController.createNewUser,  (req, res) => {
  res.status(200).json(res.locals.userId);
});

router.post('/login', userController.verifyUser,  (req, res) => {
  res.status(200).json(res.locals.userId);
});

module.exports = router;