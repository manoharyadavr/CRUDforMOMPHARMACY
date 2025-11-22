# MERN Stack Project Management Application

A full-stack MERN (MongoDB, Express, React, Node.js) application with complete CRUD operations and More Menu functionality.

## Features

- ✅ **Full CRUD Operations**: Create, Read, Update, Delete projects
- ✅ **More Menu Options**: 
  - View project details
  - Edit project
  - Archive/Unarchive project
  - Mark as Favorite/Unfavorite
  - Duplicate project
  - Delete project
- ✅ **RESTful API**: Clean backend API with Express
- ✅ **Modern React Frontend**: Built with Vite and React Router

## Tech Stack

### Backend
- Node.js
- Express.js
- MongoDB (Mongoose)
- CORS
- dotenv

### Frontend
- React 18
- React Router DOM
- Axios
- Vite

## Project Structure

```
my-app/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── projectController.js
│   ├── models/
│   │   └── Project.js
│   ├── routes/
│   │   └── projectRoutes.js
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── server.js
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   └── MoreMenu.jsx
│   │   ├── pages/
│   │   │   ├── ProjectList.jsx
│   │   │   ├── ProjectForm.jsx
│   │   │   └── ProjectView.jsx
│   │   ├── api.js
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── package.json
│   ├── vite.config.js
│   └── .gitignore
└── README.md
```

## Setup Instructions

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn

### 1. Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Configure MongoDB connection:
   - Open `backend/.env`
   - Update `MONGO_URI` with your MongoDB connection string:
     - For local MongoDB: `mongodb://localhost:27017/mern-projects`
     - For MongoDB Atlas: `mongodb+srv://username:password@cluster.mongodb.net/mern-projects`

4. Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### 2. Frontend Setup

1. Open a new terminal and navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:3000` (or the next available port)

## API Endpoints

### CRUD Operations

- `POST /api/projects` - Create a new project
- `GET /api/projects` - Get all projects
- `GET /api/projects/:id` - Get a single project
- `PUT /api/projects/:id` - Update a project
- `DELETE /api/projects/:id` - Delete a project

### More Menu Actions

- `PATCH /api/projects/:id/archive` - Toggle archive status
- `PATCH /api/projects/:id/favorite` - Toggle favorite status
- `POST /api/projects/:id/duplicate` - Duplicate a project

## Usage

1. **View Projects**: Navigate to the home page to see all projects in a table
2. **Create Project**: Click "+ Add Project" button to create a new project
3. **More Menu**: Click the "⋮" button on any project row to access:
   - View: See project details
   - Edit: Modify project information
   - Archive/Unarchive: Toggle project status
   - Favorite/Unfavorite: Mark project as favorite
   - Duplicate: Create a copy of the project
   - Delete: Remove the project (with confirmation)

## Project Model

```javascript
{
  name: String (required),
  description: String,
  status: String (default: "active"), // "active" | "archived"
  isFavorite: Boolean (default: false),
  createdAt: Date,
  updatedAt: Date
}
```

## Testing the API

You can test the API endpoints using:
- **Postman**
- **Thunder Client** (VS Code extension)
- **curl** commands
- **Browser** (for GET requests)

Example curl commands:

```bash
# Create a project
curl -X POST http://localhost:5000/api/projects \
  -H "Content-Type: application/json" \
  -d '{"name":"My Project","description":"Project description"}'

# Get all projects
curl http://localhost:5000/api/projects

# Update a project
curl -X PUT http://localhost:5000/api/projects/PROJECT_ID \
  -H "Content-Type: application/json" \
  -d '{"name":"Updated Name"}'

# Delete a project
curl -X DELETE http://localhost:5000/api/projects/PROJECT_ID
```

## Development

### Backend
- Uses `nodemon` for auto-restart on file changes
- Server runs on port 5000 (configurable via `.env`)

### Frontend
- Uses Vite for fast development
- Hot Module Replacement (HMR) enabled
- Runs on port 3000 (configurable via `vite.config.js`)

## Production Build

### Frontend
```bash
cd frontend
npm run build
```
The build output will be in the `dist/` directory.

### Backend
```bash
cd backend
npm start
```

## Troubleshooting

1. **MongoDB Connection Error**: 
   - Ensure MongoDB is running locally, or
   - Check your MongoDB Atlas connection string in `.env`

2. **CORS Errors**: 
   - Backend has CORS enabled for all origins
   - If issues persist, check the frontend API base URL in `src/api.js`

3. **Port Already in Use**: 
   - Change the PORT in `backend/.env` or
   - Change the port in `frontend/vite.config.js`

## License

This project is open source and available for educational purposes.

