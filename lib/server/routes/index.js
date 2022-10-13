const router = require("express").Router();
const users = require("./user");

router.get("/fast", users.fast);
router.get("/slow", users.slow);

module.exports = router;
