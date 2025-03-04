const bcrypt = require("bcrypt");
const userService = require("../services/userService");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const signUp = async (req, res) => {
  const { email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const userData = {
    email,
    password: hash,
  };
  const result = await userService.addUser(userData);
  console.log(hash);
  res.status(201).json(result);
};

const signIn = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email: email } });

  if (!user) {
    res.status(401).json({ message: "couple d'auth mauvais" });
  }
  const check = await bcrypt.compare(password, user.password);
  if (!check) {
    res.status(401).json({ message: "couple d'auth mauvais" });
  }
  const token = jwt.sign(
    {
      userId: user.id,
    },
    "secret",
    {
      expiresIn: "10m",
    }
  );
  res.status(200).json({ token });
};

module.exports = { signUp, signIn };
