const {
  VerifyToken,
  VerifyTokenAndAuthorization,
  VerifyTokenAndAdmin,
} = require("./verifyToken");
const cryptoJs = require("crypto-js");
const router = require("express").Router();
const User = require("../models/User");

//UPDATE
router.put("/:id", VerifyTokenAndAuthorization, async (req, res) => {
  if (req.body.password) {
    req.body.password = cryptoJs.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString();
  }

  try {
    const upDatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(upDatedUser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//DELETE

router.delete("/:id", VerifyTokenAndAuthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("user deleted successfully");
  } catch (error) {
    res.status(500).json(err);
  }
});

//GET USERS
router.get("/find/:id", VerifyTokenAndAdmin, async (req, res) => {
  try {
    const users = await User.findById(req.params.id);
    const { password, ...others } = users._doc;
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
});

//GET ALL USERS
router.get("/", VerifyTokenAndAdmin, async (req, res) => {
  const query = req.query.new;
  try {
    const users = query
      ? await User.find().sort({ _id: -1 }).limit(5)
      : await User.find();
    res.status(200).json(users);
  } catch (err) {}
  res.status(500).json(err);
});

//GET USER STATS
router.get("/stats", VerifyTokenAndAdmin, async (req, res) => {
  const date = new Date();
  const lastYear = new Date(date.setFullYear(date.getFullYear - 1));
  try {
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
