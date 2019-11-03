const { User } = require('../models');

const insertNewUser = (username, email, password, location, role) => {
  return new Promise((resolve, reject) => {
    try {
      await User.create({
        username,
        password,
        email,
        location,
        role: 'user'
      });
      // return the inserted user
      const newUser = await User.findOne({username, email, password});
      resolve(newUser);
    } catch (err){
      reject(`Insert new user Error ${err}`)
    }
  })
}

module.exports = insertNewUser;

