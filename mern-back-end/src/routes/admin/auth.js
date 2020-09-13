const express = require("express");
const { signup, singin, requireSignin } = require("../../controller/admin/auth");

const router = express.Router();

router.post("/admin/signin", singin);
router.post("/admin/signup", signup);



module.exports = router;
