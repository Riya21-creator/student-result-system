const mongoose = require("mongoose");

const MarksSchema = new mongoose.Schema({
    rollNo: { type: String, required: true },
    name: { type: String, required: true },
    className: { type: String, required: true },
    subjects: {
        math: Number,
        physics: Number,
        chemistry: Number,
        english: Number,
        computer: Number
    },
    total: Number,
    percentage: Number,
    result: String
});

module.exports = mongoose.model("Marks", MarksSchema);