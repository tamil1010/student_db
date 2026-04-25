# 🎓 Student DataBase Management

Student DB Management System is a full-stack web application designed to manage student records through structured validation and secure CRUD operations. The system enforces strict Roll Number formatting rules and ensures branch consistency during both insertion and update operations, maintaining strong data integrity.

The application demonstrates end-to-end CRUD functionality using a RESTful API architecture with client-side validation, backend error handling, and persistent MySQL storage.

# 🚀 Key Features

- 📋 Add Student – Insert new student records with strict Roll Number validation

- 🔄 Update Student – Modify student details with branch–RollNo consistency enforcement

- 🗑 Delete Student – Remove records securely

- 📊 List Students – Dynamically display student records

- 🔍 Roll Number Validation – Enforces format: 2 digits + BRANCH + 2 digits

- 🏷 Auto Branch Detection – Automatically extracts branch from RollNo

- 🚫 Branch Mismatch Protection – Prevents update if branch does not match RollNo

- 🔔 Toast Notifications – Structured feedback for all operations

- 📱 Responsive UI – Works across desktop and mobile


# 🛠 Tech Stack

**Frontend:**
HTML, CSS (Modern Dark UI), JavaScript

**Backend:**
Node.js, Express

**Database:**
MySQL 

**Architecture:**
REST API (No WebSockets)

# 📁 Project Structure

```
Student_DB/
│
├── Backend/
│   ├── server.js
│   ├── db.js
│   ├── package.json
│
├── Frontend/
│   ├── index.html
│   ├── student_script.js
│   └── student_style.css
│
└── README.md
```


# ▶️ How to Run the Project (Local Setup)

### ✅ Prerequisites
- Node.js (v16 or above)
- MySQL running on port 3306
- npm

### 1️⃣ Clone Repository
- git clone https://github.com/your-username/student_db.git
- cd student_db
  
### 2️⃣ Backend Setup
- cd Backend
- npm install
- node server.js
- Backend runs on:http://localhost:3000
  
### 3️⃣ Frontend Setup
- Open:Frontend/index.html
- (Or) use Live Server in VS Code.

### 4️⃣ 📊 Database Schema

| Column | Type | Description |
| -------- | -------- | -------- |
| RollNo | VARCHAR(20) | Primary Key |
| Name	| VARCHAR(100)	| Student Name |
| Branch	| VARCHAR(20) |	Department/Branch |
| City	| VARCHAR(50)	 | Student City |


# 👤 Author

Tamilvani S

Full-Stack Web Developer

Focus: Clean UI, Data Validation, REST API Architecture
