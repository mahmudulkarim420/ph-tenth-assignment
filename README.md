# 📚 The Book Haven  
A full-stack MERN application where users can explore, add, update, and manage books in a digital library.  
Authenticated users can maintain their personal book collection with secure access and real-time data updates.

<br>

## 🔗 Live Site  
🔴 **Live URL:** [_Add your deployed Netlify/Surge URL here_ ](https://ph-tenth-assignment-7c08c.web.app/) 
🟢 **Server URL:** [_Add Vercel server link here_](https://books-haven-prem-server-kappa.vercel.app/)  

<br>

## 📌 Project Overview  
The Book Haven is a complete MERN stack project featuring:  
- Firebase Authentication  
- CRUD Operations with MongoDB  
- Protected Routes  
- Book Management Dashboard  
- Dynamic Home Page with latest books  
- Sorting, detailed book view, and user-specific book management  

<br>

---

# 🚀 Features  

### 🏠 **Home Page**
- Beautiful banner with animations & CTA buttons  
- Latest 6 books loaded dynamically from MongoDB  
- Two additional static sections (Top Genres / Book of the Week / About Section)  

### 🔐 **Authentication**
- Firebase Login & Registration  
- Google Authentication  
- Password validation  
- No redirect issues  
- Private route protection  

### 📘 **Book Management (CRUD)**
- Add Book (imgbb image upload)  
- View All Books  
- Update Book (pre-filled form)  
- Delete Book (only own books)  
- My Books page with user-specific data  

### 📄 **Book Details Page**
- Full details  
- Private route protected  
- Optional comment/review support  

### ⚙️ **Other Functionalities**
- Axios API  
- Toast Notifications  
- Loading Spinner  
- 404 Page  
- Sorting, Filtering  
- Dark/Light Mode (Optional)  

<br>

---

# 🛠️ Tech Stack  

### **Frontend (Client)**
- React.js  
- React Router  
- Tailwind CSS  
- Firebase Auth  
- Axios  
- Hot Toast  

### **Backend (Server)**
- Node.js  
- Express.js  
- MongoDB  
- CORS  
- dotenv  

### **Deployment**
- Client → Netlify / Surge  
- Server → Vercel  

<br>

---

# 🗂️ Folder Structure  

client/
├── src/
│ ├── components/
│ ├── pages/
│ ├── routes/
│ ├── context/
│ └── hooks/
server/
├── index.js
├── routes/
└── models/



<br>

---

# 📥 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | /books | Get all books |
| GET | /books/:id | Get single book |
| POST | /books | Add new book |
| PUT | /books/:id | Update book |
| DELETE | /books/:id | Delete book |

<br>

---

# 🧪 How to Run Locally  

### **1️⃣ Clone Repos**
```sh
git clone https://github.com/mahmudulkarim420/ph-tenth-assignment.git
git clone  https://github.com/mahmudulkarim420/ph-tenth-assignment-server.git

cd client
npm install

cd server
npm install
