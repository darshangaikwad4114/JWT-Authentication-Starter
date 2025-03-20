# JWT Authentication Starter

## Tech Stack

- **Node.js**: JavaScript runtime
- **Express**: Web framework for Node.js
- **MongoDB**: NoSQL database
- **Mongoose**: MongoDB object modeling tool
- **JSON Web Token (JWT)**: Token-based authentication
- **dotenv**: Environment variable management
- **bcrypt**: Password hashing

## Description

JWT Authentication Starter is a starter project for implementing JSON Web Token (JWT) authentication in your application. It provides a basic setup for user registration, login, and protected routes using JWT. This project aims to simplify the process of adding authentication to your Node.js applications.

## Key Features

- User registration with hashed passwords
- User login with JWT token generation
- Protected routes using JWT middleware
- Environment variable management with dotenv
- MongoDB integration with Mongoose

## Installation

Follow these steps to set up the project locally:

1. **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/JWT-Authentication-Starter.git
    cd JWT-Authentication-Starter
    ```

2. **Install dependencies:**
    ```sh
    npm install
    ```

3. **Create a `.env` file in the root directory and add your environment variables:**
    ```env
    MONGODB_URL=your_mongodb_connection_string
    SECRET_KEY=your_secret_key
    ```

4. **Run the application:**
    ```sh
    npm run dev
    ```

## Usage

Once the application is set up and running, you can use the following endpoints:

- **User Registration:**
    - **Endpoint:** `POST /auth/signup`
    - **Body:**
        ```json
        {
            "username": "your_username",
            "password": "your_password"
        }
        ```
    - **Description:** This endpoint allows new users to register by providing a username and password. The password is hashed before being stored in the database.

- **User Login:**
    - **Endpoint:** `POST /auth/login`
    - **Body:**
        ```json
        {
            "username": "your_username",
            "password": "your_password"
        }
        ```
    - **Response:**
        ```json
        {
            "token": "your_jwt_token"
        }
        ```
    - **Description:** This endpoint allows registered users to log in by providing their username and password. If the credentials are valid, a JWT token is returned.

- **Protected Route:**
    - **Endpoint:** `GET /decodeDetails`
    - **Headers:**
        ```json
        {
            "Authorization": "Bearer your_jwt_token"
        }
        ```
    - **Response:**
        ```json
        {
            "username": "your_username"
        }
        ```
    - **Description:** This endpoint is protected by JWT middleware. It returns the username of the authenticated user. The JWT token must be provided in the `Authorization` header.

This project provides a solid foundation for implementing JWT authentication in your Node.js applications. Feel free to extend and customize it according to your needs.
