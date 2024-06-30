const mongoose = require("mongoose");

const todoSchema = mongoose.Schema(
    {
        todo:{
            type: String,
            default: [],
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("Todo",todoSchema);