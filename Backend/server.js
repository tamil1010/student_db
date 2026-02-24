const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();
const PORT = 3000;

/* ================================
   MIDDLEWARE
================================ */

// Allow requests from your Vercel frontend
app.use(cors({
  origin: "*",   // You can later restrict to your vercel domain
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: false
}));

app.use(express.json());

/* ================================
   HEALTH CHECK (Very Important)
================================ */

app.get("/", (req, res) => {
  res.send("Backend is running successfully 🚀");
});

/* ================================
   ADD STUDENT
================================ */
app.post("/students", async (req, res) => {
  try {
    const { rollno, name, branch, city } = req.body;

    if (!rollno || !name || !branch || !city) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const rollnoPattern = new RegExp(`^\\d{2}${branch}\\d{2}$`);

    if (!rollnoPattern.test(rollno)) {
      return res.status(400).json({
        message: `RollNo must be: 2 digits + ${branch} + 2 digits`
      });
    }

    const sql = `
      INSERT INTO students (RollNo, Name, Branch, City)
      VALUES (?, ?, ?, ?)
    `;

    await db.query(sql, [rollno, name, branch, city]);

    res.status(201).json({ message: "Student details added successfully" });

  } catch (err) {
    console.error("Add Error:", err);
    res.status(500).json({ message: "Server error while adding student" });
  }
});

/* ================================
   LIST STUDENTS
================================ */
app.get("/students", async (req, res) => {
  try {
    const [rows] = await db.query("SELECT * FROM students");
    res.status(200).json(rows);
  } catch (err) {
    console.error("List Error:", err);
    res.status(500).json({ message: "Server error while fetching students" });
  }
});

/* ================================
   UPDATE STUDENT
================================ */
app.put("/students/:rollno", async (req, res) => {
  try {
    const rollno = req.params.rollno;
    const { name, branch, city } = req.body;

    const sql = `
      UPDATE students
      SET Name=?, Branch=?, City=?
      WHERE RollNo=?
    `;

    const [result] = await db.query(sql, [name, branch, city, rollno]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ message: "Student details updated successfully" });

  } catch (err) {
    console.error("Update Error:", err);
    res.status(500).json({ message: "Server error while updating student" });
  }
});

/* ================================
   DELETE STUDENT
================================ */
app.delete("/students/:rollno", async (req, res) => {
  try {
    const rollno = req.params.rollno;

    const [result] = await db.query(
      "DELETE FROM students WHERE RollNo=?",
      [rollno]
    );

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ message: "Student deleted successfully" });

  } catch (err) {
    console.error("Delete Error:", err);
    res.status(500).json({ message: "Server error while deleting student" });
  }
});

/* ================================
   START SERVER
================================ */
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});