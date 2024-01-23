const jwt = require("jsonwebtoken");
require("dotenv").config();
const CustomApiError = require("../errors/custom-error");
const login = (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new CustomApiError("Password or email invalid", 400);
  }
  const id = new Date().getDate();
  const token = jwt.sign({ id, username }, process.env.JWT_TOKEN, {
    expiresIn: "30d",
  });
  res.status(200).json({ msg: "user created", token });
};
const dashboard = async (req, res) => {
  console.log(req.user);
  const luckNumber = Math.floor(Math.random() * 100);
  res
    .status(200)
    .json({ msg: `Hello ${req.user.username}`, secret: luckNumber });
};
module.exports = { login, dashboard };
