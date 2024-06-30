const TodoModel = require("../models/TodoModel");

module.exports.addTodo = async (req, res, next) => {
  try {
    const { todo } = req.body;
    console.log(todo);
    const data = await TodoModel.create({
      todo: todo,
    });

    if (data) return res.json({ success: true, msg: "Todo added successfully." });
    else {
      console.log("Failed");
      return res.json({ msg: "Failed to add todo to the database" });
    }
  } catch (ex) {
    next(ex);
  }
};

module.exports.getTodo = async (req,res,next) => {
    try{
        const data = await TodoModel.find();
        console.log(data);
        return res.json(data);
    }catch (ex) {
        next(ex);
      }
};
