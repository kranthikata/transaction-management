const userService = require("../services/userService");

// Create a new user
exports.createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        error: "All fields are required",
      });
    }

    const isUserExists = await userService.findUserByEmail(email);
    if (isUserExists) {
      return res.status(409).json({
        error: "User already exists",
      });
    }

    const user = await userService.createUser({ name, email, password });
    res.status(201).json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Retrieve user details
exports.getUserById = async (req, res) => {
  try {
    const { id } = req.params;

    const user = await userService.findUserById(id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
