const express = require("express");
const router = express.Router();
const db = require("../db");

// ADD
router.post("/", (req, res) => {
  const { rollno, name, age, department, city } = req.body;

  const sql = "INSERT INTO students VALUES (?, ?, ?, ?, ?)";
  db.query(sql, [rollno, name, age, department, city], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send("Student Added Successfully");
  });
});

// LIST
router.get("/", (req, res) => {
  db.query("SELECT * FROM students", (err, result) => {
    if (err) return res.status(500).send(err);
    res.json(result);
  });
});

// DELETE
router.delete("/:rollno", (req, res) => {
  const rollno = req.params.rollno;

  db.query("DELETE FROM students WHERE rollno = ?", [rollno], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send("Student Deleted Successfully");
  });
});

// UPDATE
router.put("/:rollno", (req, res) => {
  const rollno = req.params.rollno;
  const { name, age, department, city } = req.body;

  const sql = "UPDATE students SET name=?, age=?, department=?, city=? WHERE rollno=?";
  db.query(sql, [name, age, department, city, rollno], (err, result) => {
    if (err) return res.status(500).send(err);
    res.send("Student Updated Successfully");
  });
});

module.exports = router;
