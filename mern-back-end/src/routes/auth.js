const express = require("express");
const { signup, singin, requireSignin } = require("../controller/auth");
const { } = require("express-validator")

const router = express.Router();

router.post("/signup", [
  check("firstName")
    .isEmpty(
    .withMessage("FirstName is required"),
  check("lastName")
    .isEmpty()
    .withMessage("LastName is required"),
  check("email")
  .isEmail()
    .withMessage("Valid Email is required"),
  check("password")
  .isLength({min: 6})
  .withMessage("Password must be at least 6 character long")
  )
] singup);
router.post("/signin", signin);

router.post("/profile",requireSignin, (req, res) => {
  res.status(200).json({user: "profile"})
})

module.exports = router;
