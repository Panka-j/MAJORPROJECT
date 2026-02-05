# 🏠 Wanderlust — Airbnb Clone (MERN Stack)

Wanderlust is a full-stack Airbnb-like web application where users can create property listings, upload images, view locations on interactive maps, and post reviews.  
This project focuses on real-world backend architecture, authentication, authorization, and third-party service integration.

---

## 🚀 Live Demo
🔗 Live App: https://majorproject-oj04.onrender.com

🔗 GitHub Repo: https://github.com/Panka-j/airbnb-clone-mern

---

## 🧰 Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB & Mongoose
- Passport.js (Authentication)
- Express Session + Connect-Mongo
- Joi (Validation)

### Frontend
- EJS & ejs-mate
- HTML, CSS, JavaScript
- Bootstrap

### Third-Party Services
- Cloudinary (Image storage)
- Multer (File uploads)
- OpenStreetMap (Geocoding)
- Leaflet.js (Maps)

---

## ✨ Features

- User authentication (signup, login, logout)
- Create, edit, and delete property listings
- Upload and display listing images
- Interactive maps with geocoded locations
- Reviews with author-based permissions
- Flash messages for success & errors
- Server-side validation and error handling

---

## 📂 Project Structure

controllers/ → Business logic
models/ → Database schemas
routes/ → Express routes
views/ → EJS templates
public/ → CSS & client-side JS
middlewares/ → Auth & validation checks




---

## 🔄 How It Works

**Flow:** Routes → Controllers → Models

Example:  
User submits listing form → authentication & validation → image upload → address geocoding → data saved in MongoDB → listing rendered with map.

---

## 🔐 Authentication & Security

- Passwords hashed using passport-local-mongoose
- Session-based authentication stored in MongoDB
- Authorization checks for listings and reviews
- Input validation using Joi
- Centralized error handling

---

## 🖼 Screenshots

screenshots/

├── home.png
<img width="1366" height="675" alt="Screenshot (276)" src="https://github.com/user-attachments/assets/f6115ed6-3050-4b0b-9b47-ba02ce9bebd2" />
├── listing.png
<img width="1366" height="669" alt="Screenshot (277)" src="https://github.com/user-attachments/assets/7363e8c7-e953-4595-b47b-06abed3f736f" />
└── map.png
<img width="1366" height="580" alt="Screenshot (278)" src="https://github.com/user-attachments/assets/5073e5b9-f594-459e-a464-51a6915cc339" />



---

## 📈 Future Improvements

- CSRF protection
- Rate limiting on auth routes
- Password reset & strength validation
- Auto-delete images from Cloudinary on listing removal
- Improved UI with React frontend

---

## 🧠 What I Learned

- Building scalable Express.js applications
- Authentication & authorization workflows
- File uploads and cloud storage integration
- MVC architecture and clean code practices
- Handling real-world errors and validations

---

## 👨‍💻 Author

**Pankaj**  
BTech 3rd Year | Full-Stack Developer  
Currently learning **React** and preparing for **internship opportunities**.

---

⭐ If you like this project, feel free to star the repository!





