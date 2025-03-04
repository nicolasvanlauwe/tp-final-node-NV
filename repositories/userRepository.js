const User = require("../models/User");

const addUser = async (data) => {
  const user = await User.create(data);
  return user;
};

module.exports = { addUser };
