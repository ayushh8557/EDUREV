# Edurev - EdTech Learning Platform

Edurev is a fully functional EdTech platform that enables users to create, consume, and rate educational content. The platform is built using the MERN stack, which includes ReactJS, NodeJS, MongoDB, and ExpressJS.

---

## 📌 Introduction

Edurev aims to provide a seamless and interactive learning experience for students, making education more accessible and engaging. The platform allows learners to explore courses, enroll in programs, track their progress, and rate content.

It also provides instructors with tools to create and manage courses, upload multimedia content, and analyze course performance.

---

## 🏗 System Architecture

Edurev follows a client-server architecture consisting of three main components:

### 1️⃣ Front-End
- Built using **ReactJS**
- Styled with **Tailwind CSS**
- State management using **Redux**
- Communicates with backend using REST APIs

#### Student Features:
- Homepage
- Course List
- Wishlist
- Cart & Checkout
- Course Content Access
- Profile Management

#### Instructor Features:
- Dashboard
- Course Creation & Management
- Insights & Analytics
- Profile Editing

---

### 2️⃣ Back-End
- Built using **NodeJS** and **ExpressJS**
- RESTful API architecture
- Handles authentication, course logic, and payments

#### Back-End Features:
- JWT-based Authentication
- OTP Verification
- Forgot Password Functionality
- Course CRUD Operations
- Razorpay Payment Integration
- Cloudinary Media Storage
- Markdown Content Support

---

### 3️⃣ Database
- **MongoDB** (NoSQL Database)
- Managed using **Mongoose ODM**

#### Main Data Models:
- Student Schema
- Instructor Schema
- Course Schema

---

## 🔌 API Design

- REST Architecture
- JSON Data Format
- HTTP Methods Used:
  - GET
  - POST
  - PUT
  - DELETE

---

## ⚙️ Installation

```bash
git clone <repository-url>
cd Edurev
npm install
```

---

## 🔐 Configuration

Create a `.env` file in the root directory and add:

```
MONGODB_URI=<your-mongodb-connection-url>
JWT_SECRET=<your-jwt-secret-key>
```

---

## ▶️ Usage

Start the backend server:

```bash
npm start
```

Start the frontend:

```bash
cd client
npm start
```

Open your browser and visit:

```
http://localhost:3000
```

---

## 🚀 Key Features

- Secure Authentication & Authorization
- Course Creation & Enrollment
- Instructor Dashboard & Insights
- Secure Online Payments
- Cloud Media Storage
- Scalable MERN Stack Architecture

---

## 📚 Tech Stack

- ReactJS
- NodeJS
- ExpressJS
- MongoDB
- Redux
- Tailwind CSS
- JWT
- Bcrypt
- Razorpay
- Cloudinary

---

## 📄 License

This project is for educational purposes.