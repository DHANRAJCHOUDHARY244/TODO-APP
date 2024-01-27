# Todo MERN App

## Overview

This repository contains the source code for a secure and feature-rich Todo application developed using the MERN stack (MongoDB, Express.js, React, Node.js). The application is designed to provide a robust task management system with a focus on security, persistence, validation, and user-friendly documentation.

## Folder Structure

- **frontend**: Contains the React code for the frontend of the application.
  - **src**: Source code for the React application.
  - **public**: Public assets and HTML template.
  - **node_modules**: Frontend dependencies.

- **backend**: Contains the Node.js code for the backend of the application.
  - **routes**: Backend route handlers.
  - **models**: MongoDB data models.
  - **middlewares**: Middleware functions.
  - **config**: Configuration files.
  - **node_modules**: Backend dependencies.
  - **.env**: Environment variables.

## Frontend

The frontend of the application is built using React, leveraging popular libraries like Material-UI for UI components and Emotion for styling. React Router is used for navigation, providing a seamless user experience.

### Frontend Dependencies
- **React**: v18.2.0
- **React Router DOM**: v6.7.0
- **Material-UI**: v5.11.6
- **Emotion**: v11.10.5
- **axios**: v1.3.4
- **moment**: v2.29.4

## Backend

The backend is developed using Node.js and Express.js, with MongoDB as the database. Security measures are implemented to ensure robust authentication and data protection.

### Backend Dependencies
- **Express.js**: v4.18.2
- **Mongoose**: v6.9.0
- **bcrypt**: v5.1.0 - Used for secure password hashing.
- **jsonwebtoken**: v9.0.0 - Implements JSON Web Tokens for user authentication.
- **body-parser**: v1.20.1
- **cors**: v2.8.5

### Security Tools
- **bcrypt**: Utilized for secure password hashing, ensuring that user passwords are not stored in plaintext in the database.
- **jsonwebtoken**: Implements JWT for secure user authentication, generating and validating tokens to ensure the integrity of user sessions.
- **cors**: Configured to handle Cross-Origin Resource Sharing, enhancing security by restricting which domains can access the backend.
- **dotenv**: Securely manages environment variables, including sensitive information such as API keys and database connection strings.

## Task Management Features

### Users can:
- Create tasks with a title and description.
- View a list of all tasks.
- Mark tasks as completed.
- Edit task details.
- Delete tasks.

## Persistence

Data persistence is achieved through MongoDB, a NoSQL database. Tasks are stored and retrieved from the database, ensuring data integrity and reliability.

## Validation

- Task titles must not be empty, with validation implemented to enforce this requirement.
- Users cannot mark a task as complete if it's already marked as such.
- Errors are handled gracefully, providing meaningful error messages to enhance the user experience.

## Additional Tools

- **Tailwind CSS**: v3.2.4 - Utilized for utility-first styling in the frontend, providing a flexible and efficient way to design the user interface.
- **axios**: v1.3.4 - Used for making HTTP requests from the frontend to the backend, facilitating seamless communication between the client and server.
- **moment**: v2.29.4 - A versatile library for handling dates and times, enhancing the presentation of time-related information in the application.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/DHANRAJCHOUDHARY244/TODO-APP.git
   ```

2. Install frontend dependencies:
   ```bash
   cd frontend
   npm install
   ```

3. Install backend dependencies:
   ```bash
   cd backend
   npm install
   ```

4. Set up a MongoDB database and configure the connection string in the backend `.env` file.

5. Start the frontend and backend:
   - Frontend:
     ```bash
     cd frontend
     npm start
     ```
   - Backend:
     ```bash
     cd backend
     npm start
     ```

Feel free to contribute or report issues. Happy coding!# TODO-APP

![Login Screen]([https://github.com/DHANRAJCHOUDHARY244/TODO-APP/blob/main/screenshot/s1.png?raw=true])

![Register]([https://github.com/DHANRAJCHOUDHARY244/TODO-APP/blob/main/screenshot/s2.png?raw=true])
