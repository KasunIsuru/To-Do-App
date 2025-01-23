# To-Do App (MERN Stack)

This is a simple To-Do application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack.

## Features

- Add, edit, and delete tasks.
- Mark tasks as complete or incomplete.
- Store tasks persistently using MongoDB.

## Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v14 or later)
- [MongoDB](https://www.mongodb.com/try/download/community)
- [npm](https://www.npmjs.com/)

## Installation

Follow these steps to set up the project:

### Backend Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mern-todo-app.git
   cd mern-todo-app
   ```

2. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the `backend` directory and add the following:
   ```env
   PORT=5000
   MONGO_URI=mongodb://localhost:27017/todoapp
   ```

5. Start the backend server:
   ```bash
   npm start
   ```

### Frontend Setup

1. Open a new terminal and navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend development server:
   ```bash
   npm start
   ```

## Folder Structure

```plaintext
mern-todo-app/
├── backend/       # Node.js & Express backend
│   ├── models/    # Mongoose models
│   ├── routes/    # API routes
│   └── server.js  # Entry point for the backend
├── frontend/      # React frontend
│   ├── src/
│   │   ├── components/ # React components
│   │   ├── pages/      # Page components
│   │   └── App.js      # Main React component
├── README.md      # Project documentation
```

## API Endpoints

### Base URL: `http://localhost:5000`

#### Tasks

- **GET** `/api/tasks`: Get all tasks.
- **POST** `/api/tasks`: Create a new task.
- **PUT** `/api/tasks/:id`: Update a task by ID.
- **DELETE** `/api/tasks/:id`: Delete a task by ID.

## Scripts

### Backend

- `node server.js`: Start the backend server.

### Frontend

- `npm start`: Start the React development server.
- `npm run build`: Build the frontend for production.

## Contributing

Feel free to contribute by submitting issues or pull requests. Make sure to follow the project's coding standards.

## License

This project is licensed under the MIT License. See the LICENSE file for details.
