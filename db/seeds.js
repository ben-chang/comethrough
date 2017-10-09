const mongoose = require('mongoose');
const User     = require('../models/user');
const config   = require('../config/config');
mongoose.Promise = require('bluebird');
mongoose.connect(config.db);

User.collection.drop();
