const router = require("express").Router();
const User = require("../models/User");
const cryptoJs = require("crypto-js");
const jwt = require("jsonwebtoken");

//Register

router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: cryptoJs.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });
  try {
    const savedUser = await newUser.save();
~~
    res.status(201).json(savedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Login

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("Wrong Credentials");

    const hassedPassword = cryptoJs.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const originalPassword = hassedPassword.toString(cryptoJs.enc.Utf8);

    originalPassword !== req.body.password &&
      res.status(500).json("Wrong Credentials");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3d" }
    );

    const { password, ...others } = user._doc;
    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
