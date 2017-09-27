const User = require('../models/user');

function userIndex(req, res) {
  User.find()
    .exec()
    .then(data => {
      if (!data) return res.status(404).json({ message: 'Error: Nothing found'});
      res.status(200).json(data);
    })
    .catch(err => {
      res.status(500).json({message: err});
    });
}

module.exports = {
  index: userIndex
};
