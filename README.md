# 🛍️ InventoryEase 🚀

A full-stack web application built with the MERN stack to manage products efficiently.  Create, read, update, and delete products with a modern, responsive user interface and light/dark theme support.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Made with JavaScript](https://img.shields.io/badge/Made%20with-JavaScript-yellow)](https://www.javascript.com/)
[![React](https://img.shields.io/badge/React-v18.x-blue)](https://react.dev/)
[![Node.js](https://img.shields.io/badge/Node.js-v18.x-green)](https://nodejs.org/en/)
[![Express](https://img.shields.io/badge/Express-v4.x-orange)](https://expressjs.com/)
[![MongoDB](https://img.shields.io/badge/MongoDB-v6.x-brightgreen)](https://www.mongodb.com/)
[![Zustand](https://img.shields.io/badge/Zustand-v4.x-purple)](https://github.com/pmndrs/zustand)
[![Material UI](https://img.shields.io/badge/Material%20UI-v5.x-blueviolet)](https://mui.com/)

## ✨ Features

* **View Products:** Displays a list of products with details like name, price, and image.
* **Create Products:** Allows users to add new product listings with name, price, and image URL.
* **Update Products:** Enables users to modify existing product information.
* **Delete Products:** Provides functionality to remove products from the database.
* **Theming:** Includes a light/dark mode toggle for user preference.
* **State Management:** Uses Zustand for efficient state management on the frontend.
* **Material UI:** Leverages Material UI components for a consistent and visually appealing design.

## 🛠️ Technologies

* **Frontend:**
    * [React](https://react.dev/) -  JavaScript library for building user interfaces.
    * [React Router DOM](https://reactrouter.com/en/main) -  For navigation within the app.
    * [Material UI](https://mui.com/) -  UI component library for React.
    * [Zustand](https://github.com/pmndrs/zustand) -  Simple and fast state management.
* **Backend:**
    * [Node.js](https://nodejs.org/en/) -  JavaScript runtime environment.
    * [Express](https://expressjs.com/) -  Web application framework for Node.js.
    * [MongoDB](https://www.mongodb.com/) -  NoSQL database.
    * [Mongoose](https://mongoosejs.com/) -  MongoDB object modeling tool.  (`backend/models/product.model.js`)
    * [dotenv](https://github.com/motdotla/dotenv) -  Loads environment variables from a `.env` file.

## 🚀 Getting Started

Follow these steps to get the application up and running on your local machine.

1. **Clone the Repository**

```bash
git clone <repository_url>
cd <repository_name>
```
2.  **Backend Setup:**

    * Navigate to the `backend` directory:

        ```bash
        cd backend
        ```

    * Install dependencies:

        ```bash
        npm install
        ```

    * Create a `.env` file in the `backend` directory and add your MongoDB connection string:

        ```
        MONGO_URI=your_mongodb_connection_string
        PORT=5000  # or any other port
        ```

    * Start the backend server:

        ```bash
        npm run start
        ```

3.  **Frontend Setup:**

    * Navigate to the `frontend` directory:

        ```bash
        cd frontend
        ```

    * Install dependencies:

        ```bash
        npm install
        ```

    * Start the frontend development server:

        ```bash
        npm run dev
        ```

    * The frontend should be accessible at `http://localhost:5173` (or the port Vite uses).


##  Important Notes

* Ensure MongoDB is installed and running before starting the backend server.
* The `.env` file in the `backend` directory is crucial for storing sensitive information like the MongoDB connection string.  **Do not commit this file to version control.**
* The frontend assumes the backend server is running on `/api/products`.  Adjust the proxy settings in `frontend/package.json` if needed, or use environment variables for the API URL.
* This is a basic application and can be extended with features like authentication, pagination, search, and more robust error handling.

##  Dependencies

Refer to the `package.json` files in the `backend` and `frontend` directories for a complete list of dependencies and their versions.
