const express = require("express");
const router = express.Router();

const { requireSignin, isEmployee, isAuth } = require("../controllers/auth");
const { create, update } = require("../controllers/complaint");

router.post("/complaint/create/:userId", requireSignin, isAuth, create);
router.put("/complaint/:complaintId/:userId", requireSignin, isAuth, isEmployee, update);

module.exports = router;
