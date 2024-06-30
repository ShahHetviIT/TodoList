const express = require("express");
const { addTodo, getTodo } = require("../controller/TodoController");

const router = express.Router();

router.post("/addTodo", addTodo);
router.get("/getTodo", getTodo);

module.exports = router;
