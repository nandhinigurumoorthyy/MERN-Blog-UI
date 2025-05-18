# 📝 Blog Front-End

This is the front-end of a full-stack Blog application built with **React** and styled using **Tailwind CSS**. It connects to a **Node.js + Express + MongoDB (MERN)** back-end to provide full CRUD functionality for blogs, as well as user authentication (signup/login).

## 🚀 Features

- 🔐 **User Authentication** – Sign up and log in functionality with local storage for session tracking.
- 📰 **Blog Management (CRUD)** – Users can:
  - ✍️ Create blogs with title, category, content, and image.
  - 🧾 View a list of all blogs.
  - 🔧 Update or delete their own blogs.
- 📅 **Display Blogs** – All blogs are shown on the home page with title, author, category, date, and a preview of the content.
- 📷 **Image Support** – Each blog can include an image background for enhanced UI.
- ⚡ **Responsive UI** – Built using Tailwind CSS for clean and mobile-friendly design.

## 🛠️ Technologies Used

- **Frontend**: React, Tailwind CSS
- **Backend (Connected)**: Node.js, Express.js, MongoDB (via Mongoose)
- **Routing**: React Router (`BrowserRouter`)
- **State Management**: React Hooks (`useState`, `useEffect`)
- **Styling**: Tailwind CSS

## 📁 Folder Structure

```

src/
│
├── components/
│   ├── NavBar.jsx
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── About.jsx
│   ├── Blogs.jsx
│   ├── Profile.jsx
│
├── App.jsx
├

````

## 🔧 Setup & Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/nandhinigurumoorthyy/MERN-Blog-UI.git
   cd MERN-Blog-UI
    ```
2. **Install dependencies**

   ```bash
   npm install
    ```

### Additional Packages Used

```bash
    npm install react-router-dom axios react-icons
   ```

* `react-router-dom`: For routing between pages (e.g., login, signup, blog pages).
* `axios`: For making HTTP requests to the backend.
* `react-icons`: For adding icons in the UI.

3. **Configure environment variables**
   Create a `.env` file if needed, or ensure local storage keys like `username`, `userid`, and `email` are set after login.

4. **Start the development server**

   ```bash
   npm start
   ```

## 🌐 Backend API

Ensure the back-end (MERN API) is running locally or deployed.

🔗 Backend Repository: [mern-blog-api](https://github.com/nandhinigurumoorthyy/MERN-Blog-Server.git)


### Example API Endpoints Used:

* `POST /auth/signup`
* `POST /auth/login`
* `POST /create/blogs`
* `GET /blogs`
* `PUT /update/blog/:id`
* `DELETE /delete/blog/:id`

## ✨ Live Preview

🌐 Frontend Live Site (Deployed via Netlify): (https://mern-blog-ui.netlify.app/)


## 📝 Notes

* **API URL Configuration:**
  Make sure to update the backend API base URL (`http://localhost:10000` or your deployed API URL) in your frontend code (`axios` requests or `fetch` calls) to match your environment.

* **Authentication:**
  User authentication is handled via JWT/local storage in the front end. For security, avoid storing sensitive data in local storage for production apps.

* **Error Handling:**
  The app shows basic alert messages on errors; you may want to improve this with custom modals or toast notifications for a better UX.

* **Environment Variables:**
  Consider moving all configurable values (API URLs, keys) to `.env` files for easier environment switching.

* **Styling:**
  Tailwind CSS is used for rapid styling; feel free to customize the styles in `tailwind.config.js` or add your own CSS.

* **Contributions:**
  Contributions and bug fixes are welcome! Please fork the repo and submit a pull request.



