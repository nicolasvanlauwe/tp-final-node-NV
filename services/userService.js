const userRepository = require("../repositories/userRepository");

const addUser = async (data) => {
  return await userRepository.addUser(data);
};

module.exports = { addUser };
