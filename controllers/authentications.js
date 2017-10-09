const User = require('../models/user');
const jwt = require('jsonwebtoken');
const config = require('../config/config.js');

function register(req, res) {
  req.body.comethroughStatus = false;
  User.create(req.body)
    .then(data => {
      const token = jwt.sign({ id: data.id}, config.secret, { expiresIn: 86400 });
      return res.status(201).json({
        message: `Welcome, ${data.firstname}`,
        data,
        token
      });
    })
    .catch(err => {
      res.status(500).json({message: err});
    });
}

function login(req, res) {
  User.findOne({email: req.body.email})
    .exec()
    .then(data => {
      if (!data || !data.validatePassword(req.body.password)) {
        return res.status(401).json({ message: 'Unrecognised Credentials' });
      }
      const token = jwt.sign({ id: data.id}, config.secret, { expiresIn: 86400 });
      return res.status(200).json({
        message: `Welcome back, ${data.firstname}`,
        data,
        token
      });
    })
    .catch(err => {
      res.status(500).json({message: err});
    });
}

module.exports = {
  register,
  login
};
