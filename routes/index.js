var express = require("express");
var router = express.Router();

let indexCtrl = require("../controllers/index");

/* GET home page. */
router.get("/", indexCtrl.index);
router.post("/", indexCtrl.create);

module.exports = router;
