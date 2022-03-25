const router = require("express").Router();

const { testGet } = require("../controllers/testController");

router.get(`/`, testGet);

module.exports = router;
