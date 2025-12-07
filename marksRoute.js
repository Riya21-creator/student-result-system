const express = require("express");
const router = express.Router();
const Marks = require("../models/Marks");

router.post("/add-marks", async(req, res) => {
    try {
        const { rollNo, name, className, subjects } = req.body;

        const total =
            subjects.math +
            subjects.physics +
            subjects.chemistry +
            subjects.english +
            subjects.computer;

        const percentage = (total / 500) * 100;
        const result = percentage >= 40 ? "PASS" : "FAIL";

        const newEntry = new Marks({
            rollNo,
            name,
            className,
            subjects,
            total,
            percentage,
            result
        });

        await newEntry.save();
        res.status(201).json({ message: "Marks added successfully!" });
    } catch (error) {
        res.status(500).json({ error: "Server error" });
    }
});

module.exports = router;