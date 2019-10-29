const mongoose = require('mongoose');

const { User } = require('../models');
const connection = require('./db_connection');

const rebuildDB = () => {
  new Promise(async (res, rej) => {
    try {
      // connects db
      await connection();

      // drop all schemas if its found
      await User.deleteMany();

      mongoose.disconnect();
      res('rebuild successfully');
    } catch(err) {
      rej(`Error ${err}`)
    }
  })
}

rebuildDB()
  .then(console.log)
  .catch(console.log)

