const express = require("express");
const router = express.Router();

//const {requireSignin, isAdmin, isAuth} = require('../controllers/auth');
const { create, update } = require("../controllers/complaint");

router.post("/complaint/new", create);
router.post("/complaint/changeStatus", update);

module.exports = router;
