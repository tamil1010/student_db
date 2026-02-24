# 📌 Project Description

Student DB Management System is a full-stack web application designed to manage student records efficiently through a clean and responsive interface. The system allows users to add, update, delete, and list student data while maintaining structured backend validation and persistent database storage.

The application demonstrates end-to-end CRUD functionality using a RESTful API architecture, integrating a responsive frontend with a cloud-deployed backend and MySQL database. It focuses on structured project architecture, deployment configuration, and clean UI design.

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# 🚀 Key Features

- 📋 Add Student – Insert new student records with validation

- 🔄 Update Student – Modify existing student details

- 🗑 Delete Student – Remove records safely

- 📊 List Students – Display all students dynamically

- 🔍 Roll Number Validation – Format validation using regex

- 🏷 Auto Branch Detection – Extract branch from roll number

- 🔔 Toast Notifications – Professional feedback system

- ☁ Cloud Deployment – Backend + Database hosted online

- 📱 Responsive UI – Works on desktop and mobile

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# 🛠 Tech Stack

**Frontend:**
HTML, CSS (Modern Dark UI), JavaScript

**Backend:**
Node.js, Express

**Database:**
MySQL (Railway Cloud)

**Deployment:**
Frontend → Vercel
Backend → Render
Database → Railway

**Architecture:**
REST API (No WebSockets)

----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# 🌐 Live Deployment

**Frontend:**
[student-database-frontend](https://student-db-plum.vercel.app)

**Backend API:**
[student-database-backend](https://student-database-pqry.onrender.com/students)

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# 📁 Project Structure

```
Student_DB/
│
├── Backend/
│   ├── server.js
│   ├── db.js
│   ├── package.json
│   └── .env
│
├── Frontend/
│   ├── index.html
│   ├── student_script.js
│   └── student_style.css
│
└── README.md
```

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# ▶️ How to Run the Project (Local Setup)

### ✅ Prerequisites
- Node.js (v16 or above)
- MySQL (Local or Cloud)
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
Or use Live Server in VS Code.

### ☁ Deployment Setup
**Backend Deployment (Render)**
- Push backend to GitHub
- Create Web Service in Render
- Add Environment Variables:
```
DB_HOST=xxxx
DB_USER=root
DB_PASSWORD=xxxx
DB_NAME=railway
PORT=10000
```
- Deploy

### Database Setup (Railway)
- Deploy MySQL in Railway
- Create students table:
```
USE railway;

CREATE TABLE students (
  RollNo VARCHAR(20) PRIMARY KEY,
  Name VARCHAR(100) NOT NULL,
  Branch VARCHAR(20) NOT NULL,
  City VARCHAR(50) NOT NULL
);
```

### Frontend Deployment (Vercel)
- Update BASE_URL in student_script.js:
- const BASE_URL = "https://student-database-pqry.onrender.com";
- Push to GitHub
- Deploy on Vercel
- Set Root Directory correctly if needed

### 📊 Database Schema

| Column | Type | Description |
| -------- | -------- | -------- |
| RollNo | VARCHAR(20) | Primary Key |
| Name	| VARCHAR(100)	| Student Name |
| Branch	| VARCHAR(20) |	Department/Branch |
| City	| VARCHAR(50)	 | Student City |

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

# 👤 Author

Tamilvani S

Full-Stack Web Developer

Focus: Clean UI, REST API, Deployment Architecture
