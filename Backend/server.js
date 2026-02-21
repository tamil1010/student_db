const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

/* ================================
   ADD STUDENT
================================ */
app.post("/students", (req, res) => {

  const { rollno, name, branch, city } = req.body;

  if (!rollno || !name || !branch || !city) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // 🔥 RollNo format validation
  const rollnoPattern = new RegExp(`^\\d{2}${branch}\\d{2}$`);

  if (!rollnoPattern.test(rollno)) {
    return res.status(400).json({
      message: `RollNo must be: 2 digits + ${branch} + 2 digits (Example: 12${branch}34)`
    });
  }

  const sql = `
    INSERT INTO students (RollNo, Name, Branch, City)
    VALUES (?, ?, ?, ?)
  `;

  db.query(sql, [rollno, name, branch, city], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: err.message });
    }

    res.status(201).json({ message: "Student details added successfully" });
  });
});

/* ================================
   LIST STUDENTS
================================ */
app.get("/students", (req, res) => {

  const sql = "SELECT * FROM students";

  db.query(sql, (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ error: err.message });
    }

    res.json(result);
  });
});


/* ================================
   UPDATE STUDENT
================================ */
app.put("/students/:rollno", (req, res) => {

  const rollno = req.params.rollno;
  const { name, branch, city } = req.body;

  const sql = `
    UPDATE students
    SET Name=?, Branch=?, City=?
    WHERE RollNo=?
  `;

  db.query(sql, [name, branch, city, rollno], (err, result) => {

    if (err) {
      console.error(err);
      return res.status(500).json({ error: err.message });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({ message: "Student details updated successfully" });
  });
});


/* ================================
   DELETE STUDENT
================================ */
app.delete("/students/:rollno", (req, res) => {

  const rollno = req.params.rollno;

  const sql = "DELETE FROM students WHERE RollNo=?";

  db.query(sql, [rollno], (err, result) => {

    if (err) {
      console.error(err);
      return res.status(500).json({ error: err.message });
    }

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.json({ message: "Student details deleted successfully" });
  });
});


/* ================================
   START SERVER
================================ */
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});