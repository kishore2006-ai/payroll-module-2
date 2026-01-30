# Payroll Management System – Module 2  
## Statutory & Compliance Configuration

### 📌 Project Overview
This project implements **Module 2** of a Payroll Management System inspired by Zoho Payroll.
The module focuses on configuring statutory rules required for payroll processing such as
Provident Fund (PF), Employee State Insurance (ESI), Professional Tax, and Tax Slabs.

The system allows administrators to dynamically configure compliance rules without
changing source code, making the application scalable and future-ready.

---

### 🎯 Objectives
- Configure statutory payroll rules
- Store compliance data securely
- Provide dynamic rule management
- Support future payroll automation

---

### 🛠️ Technologies Used
**Frontend**
- React (Vite)
- JavaScript (ES6+)
- Tailwind CSS

**Backend**
- Node.js
- Express.js

**Database**
- MongoDB (Mongoose)

---

### ⚙️ Features
- Country-based statutory configuration
- PF, ESI, and Professional Tax setup
- Dynamic data storage using MongoDB
- REST API integration
- Scalable payroll rule engine

---

### 💡 Innovation
Traditional payroll systems use hard-coded statutory values.
This module introduces a **dynamic compliance engine**, where statutory rules can be
updated anytime through the admin interface without code changes.

---

### 📁 Project Structure

```text
backend/
 ├── config/
 │   └── db.js
 ├── models/
 │   └── StatutoryRule.js
 ├── routes/
 │   └── statutoryRoutes.js
 └── server.js

frontend/
 ├── src/
 │   ├── pages/
 │   │   └── StatutoryConfig.jsx
 │   ├── services/
 │   │   └── api.js
 │   ├── App.jsx
 │   └── main.jsx
