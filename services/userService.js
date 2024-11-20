const bcrypt = require("bcrypt");
const User = require("../models/User");

// Check if a user exists by email
exports.findUserByEmail = async (email) => {
  return await User.findOne({ email });
};

// Create a new user
exports.createUser = async ({ name, email, password }) => {
  const hashedPassword = await bcrypt.hash(password, 10);
  return await User.create({ name, email, password: hashedPassword });
};

// Retrieve user by ID
exports.findUserById = async (id) => {
  return await User.findById(id);
};
