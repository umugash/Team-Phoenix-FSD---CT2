# Team-Phoenix---FSD-CT2
# 👨‍💻 Student Team Members Management Application (MERN Stack)

A full-stack web application to manage student team members with detailed profiles, built using the **MERN stack** (MongoDB, Express.js, React.js, Node.js).

---

## 🚀 Features

- Add student team members with full profile info and a photo
- View list of all team members in a clean card layout
- View detailed profile of each member
- Upload and display profile images
- Responsive and modern UI

---

## 🧱 Technologies Used

- **Frontend**: React.js
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Tools**: Visual Studio Code, MongoDB Compass, Axios, Multer (for image upload)

---

## 📁 Folder Structure

<pre> StudentTeamManagement/ ├── client/ # React Frontend │ ├── public/ │ ├── src/ │ │ ├── components/ # (optional) Reusable components │ │ ├── pages/ # React Pages │ │ │ ├── Home.js │ │ │ ├── AddMember.js │ │ │ ├── ViewMembers.js │ │ │ ├── MemberDetails.js │ │ │ └── App.css │ │ ├── App.js # React Router and routes │ │ └── index.js # React entry point │ └── package.json │ ├── server/ # Node.js + Express Backend │ ├── models/ │ │ └── Member.js # Mongoose schema for members │ ├── routes/ │ │ └── members.js # Express routes for API │ ├── uploads/ # Folder for uploaded profile images │ ├── index.js # Main server file │ └── package.json │ ├── README.md # Project documentation └── .gitignore # Node and build ignore rules </pre>

---

## 🛠️ Installation & Setup

### 1. Clone the repository


Backend Setup (server)

cd server
npm install
mkdir uploads
node index.js

Frontend Setup (client)

cd ../client
npm install
npm start

🔌 API Endpoints
Base URL: http://localhost:5000/api
Method	Endpoint	Description
GET	/members	Get all team members
GET	/members/:id	Get single member by ID
POST	/members	Add a new member (with image)

Image Access: Images are stored in /uploads, and can be accessed as:

http://localhost:5000/uploads/<filename>

▶️ How to Run the App
Start MongoDB on your machine

Open two terminals:

One for backend:
cd server
node index.js

One for frontend:
cd client
npm start

Open http://localhost:3000 to view the app
![3](https://github.com/user-attachments/assets/f505cc9f-84f5-47af-a34f-a90420a89260)
![1](https://github.com/user-attachments/assets/88f79b74-e46c-4ca6-8449-115e07bc9d72)
![2](https://github.com/user-attachments/assets/fc5113ba-dd86-4516-867b-052cc740ddee)

