const sqlite3 = require("sqlite3").verbose();

const db = new sqlite3.Database("./result_system.db", (err) => {
    if (err) console.log("Error opening database:", err.message);
    else console.log("Database connected successfully!");
});

// Create tables if not exist
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS students (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        roll_no TEXT UNIQUE,
        first_name TEXT,
        last_name TEXT,
        class TEXT,
        dob TEXT,
        contact TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS subjects (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT,
        max_marks INTEGER
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS exams (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT
    )`);

    db.run(`CREATE TABLE IF NOT EXISTS marks (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        student_id INTEGER,
        subject_id INTEGER,
        exam_id INTEGER,
        marks_obtained INTEGER,
        FOREIGN KEY(student_id) REFERENCES students(id),
        FOREIGN KEY(subject_id) REFERENCES subjects(id),
        FOREIGN KEY(exam_id) REFERENCES exams(id)
    )`);
});

module.exports = db;