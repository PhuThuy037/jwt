const { login, dashboard } = require("../controllers/main");
const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth");
router.route("/dashboard").get(auth, dashboard);
router.route("/login").post(login);

module.exports = router;
