# 📺 Sayonara !!! - This is Imagine  
## 🎬 YouTube Backend Clone Project  
### By Divayang Siddhapura

---

This project is a backend clone of YouTube, built to understand and implement complex server-side logic including user authentication, video management, subscriptions, cloud storage, and more.

Inspired by the teachings of **Hitesh Choudhary sir** (Chai aur Code), this project helped me grasp how backend systems interact with databases and users asynchronously.

---

## 🚀 Project Description

This backend is designed for a YouTube-like video streaming platform, implementing the following features:

### 🧩 Mongoose Models:
- **User Model**: Handles user registration, login, avatar/cover image, password management, subscriptions.
- **Video Model**: Stores video metadata like title, description, thumbnail, upload date, etc.
- **Subscription Model**: Handles relationships between users for subscriptions and counts.

<--Link to The Model: [Model](https://app.eraser.io/workspace/YtPqZ1VogxGy1jzIDkzj)-->

All schemas are structured using **Mongoose** and connected to **MongoDB Atlas** using a secret `.env` connection key.

---

## 🛣️ Routes & Controllers

This project uses **Express.js** to define custom routes for various operations. Some important routes and controllers include:

- `registerUser`, `loginUser`, `logoutUser`, `refreshAccessToken`
- `changeCurrentPassword`, `getCurrentUser`, `updateAccountDetails`
- `updateUserAvatar`, `updateUserCoverImage`, `getUserChannelProfile`
- `getWatchHistory`, `subscribeToUser`, `getSubscribersCount`

Each route uses robust controller logic to process input, interact with MongoDB, and return appropriate responses.

---

## 🛡️ Authentication & Middleware

### 🔐 JWT Tokens:
- **Access Token**: For validating authenticated sessions.
- **Refresh Token**: For issuing new access tokens without requiring login again.

### 🔐 Used Bcrypt:
- For password Encryption and Decryption

### ⚙️ Middlewares Used:
- **Multer**: For handling user image uploads (stored locally).
- **Cloudinary**: For uploading avatars and cover images to cloud storage.
- **JWT Middleware**: To protect private routes.
- **Custom Error Middleware**: To handle API errors globally.

---

## 📊 MongoDB Aggregation Pipelines

This was one of the most challenging parts. I built custom **aggregation pipelines** in MongoDB to calculate:
- Subscriber counts
- Watch history
- Subscribed-to lists
- Channel statistics

Using `mongoose-aggregate-paginate-v2` helped manage paginated responses effectively.

---

## 🛠️ Tech Stack

- **Node.js** + **Express.js** – Server and Routing
- **MongoDB Atlas** – Cloud-hosted NoSQL database
- **Mongoose** – ODM for MongoDB
- **Cloudinary** – Cloud-based image storage
- **JWT** – Token-based authentication
- **Multer** – File uploads
- **dotenv** – Secure environment variable handling

---

## 📦 What I Learned
- Full-stack backend architecture
- Designing secure and scalable APIs
- Implementing middleware layers for security and file handling
- How requests are made using Postman for testing of the routes and controllers
- Structuring large backend projects like real-world systems


## 🙏 Special Thanks<br>
A big thank you to Hitesh Choudhary sir and his channel Chai aur Code for teaching backend development from scratch in such a beginner-friendly and empowering way.

## 💡 Final Note
This is just the beginning of a bigger journey toward building full-stack, scalable, and professional-grade applications.
ImagineX is the start of it. Sayonara till the next one! 🚀