Here's a corrected version of your README.md with proper bash formatting and fixed errors:

```markdown
# 🧠 Course Management System – IIT Bombay Internship Assignment (2024–25)

A full-stack course management system built as part of the Application Software Cell internship assignment for IIT Bombay. This app allows adding and managing courses, their prerequisites, and course instances by year and semester.

---

## 📋 Features Overview

### ✅ Backend API – Spring Boot

| Feature | Status |
|--------|--------|
| `POST /api/courses` – Create course with validations | ✅ Implemented |
| `GET /api/courses` – List all courses with prerequisites | ✅ Implemented |
| `GET /api/courses/{id}` – View course details | ✅ Implemented |
| `DELETE /api/courses/{id}` – Delete course with prereq check | ✅ Implemented |
| `POST /api/instances` – Create course instance | ✅ Implemented |
| `GET /api/instances/{year}/{sem}` – List instances by semester | ✅ Implemented |
| `GET /api/instances/{year}/{sem}/{id}` – View instance detail | ✅ Implemented |
| `GET /api/instances/by-course/{id}` – List all instances of a course | ✅ Implemented |
| `DELETE /api/instances/...` – Delete instance | ✅ Implemented |

---

### ✅ Frontend – React

| Feature | Status |
|--------|--------|
| Add Course form with multi-select prerequisites | ✅ Done |
| View all courses with their prerequisites | ✅ Done |
| Delete a course only if not a prerequisite | ✅ Done |
| Create course instances (year + semester) | ✅ Done |
| List course instances and delete them | ✅ Done |
| View all instances of a selected course | ✅ Done |
| Toast & alert-based validation feedback | ✅ Done |
| Intro Home Page + navigation | ✅ Done |
| Beautiful glassmorphism UI with particles | ✅ Done |

---

## 💻 Tech Stack

- **Frontend:** React, HTML/CSS, Axios, React Toastify, tsparticles
- **Backend:** Spring Boot, Spring Data JPA
- **Database:** H2 (in-memory)
- **Build Tools:** Maven, Docker
- **Deployment:** Docker Compose

---

## 🚀 Getting Started (Local Development)

### 🧪 Backend

```bash
git clone https://github.com/your-username/course-management.git
cd course
# Run the Spring Boot application
mvn spring-boot:run
```

### 💻 Frontend

```bash
cd courses-frontend
npm install
npm start
# React dev server runs on http://localhost:3000
```

### 🐳 Docker & Deployment Instructions

This application is fully dockerized using Docker Compose for both the Spring Boot backend and the React frontend.

📦 Step 1: Build and Start All Services

```bash
docker compose up --build
```

This command:
- Builds both the backend and frontend Docker images
- Runs both containers
- Frontend runs on: http://localhost:3000
- Backend runs on: http://localhost:8080

---

### 🔒 Validations & Edge Case Handling

❌ Prevent duplicate course codes  
❌ Reject nonexistent prerequisite course IDs  
❌ Block circular prerequisites (e.g., CS101 ←→ CS102)  
❌ Prevent invalid year/semester (e.g., year < 2000, sem = 3)  
❌ Block duplicate course instances for same year + sem  
❌ Client-side validation for empty fields  
❌ UI + Backend error handling with alerts / messages  

✅ All errors display appropriate alerts

---

### 📁 Folder Structure

```
course-management/
│
├── backend/
│   └── src/...
│   └── Dockerfile
│
├── frontend/
│   └── src/
│       └── components/
│       └── App.js, index.js
│   └── Dockerfile
│
├── docker-compose.yml
├── README.md
└── .gitignore
```

### 📸 Screenshots

╰┈➤ In assets folder 

### 👩‍💻 Author

**Name:** Sayed Iqra Hassan  
**Email:** iqrahsayed625@gmail.com  
**GitHub:** https://github.com/IqraS-gif  
**Date:** June 2025  

### ✅ Final Notes

This project implements all required features with full validation, clean UI, and Docker-based deployment. Thank you for the opportunity!
```

Key fixes made:
1. Fixed bash code block formatting (removed stray numbers and `---` lines inside code blocks)
2. Properly nested all code blocks with triple backticks
3. Fixed the backend run instructions (changed from "run java" to `mvn spring-boot:run`)
4. Improved consistency in markdown formatting
5. Fixed the Docker Compose section formatting
6. Added proper spacing between sections
7. Corrected "assessts" to "assets" in the screenshots section

The README now has proper syntax and will render correctly on GitHub.
