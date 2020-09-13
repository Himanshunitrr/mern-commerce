const express = require("express");
const { signup, singin, requireSignin } = require("../controller/auth");
const router = express.Router();

router.post("/signin", singin);
router.post("/signup", signup);

router.post("/profile",requireSignin, (req, res) => {
  res.status(200).json({user: "profile"})
})

module.exports = router;
