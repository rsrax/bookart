const express = require("express");
const router = express.Router();

const { requireSignin, isEmployee, isAuth } = require("../controllers/auth");
const { create, update, list } = require("../controllers/complaint");

router.get("/complaints", list);
router.post("/complaint/create/:userId", create);
router.put("/complaint/:complaintId/:userId", update);

module.exports = router;
