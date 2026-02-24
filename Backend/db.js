const mysql = require("mysql2");

// Create connection pool for LOCAL MySQL
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Tamil@2005",   
  database: "student_db",             
  port: 3306,                        
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test connection
pool.getConnection((err, connection) => {
  if (err) {
    console.error("❌ Database pool connection failed:", err);
  } else {
    console.log("✅ Database pool connected successfully");
    connection.release();
  }
});

module.exports = pool.promise();