# MERN Project Management Application - User Guide

## Overview

This is a full-stack MERN (MongoDB, Express, React, Node.js) application for managing projects. It provides a complete CRUD (Create, Read, Update, Delete) interface with additional operations through a "More Menu" feature.

## Table of Contents

1. [Getting Started](#getting-started)
2. [Application Features](#application-features)
3. [Operations Guide](#operations-guide)
4. [How It Works](#how-it-works)
5. [Technical Architecture](#technical-architecture)

---

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas account)
- npm or yarn package manager

### Installation Steps

1. **Backend Setup**
   ```bash
   cd backend
   npm install
   ```

2. **Configure MongoDB**
   - Open `backend/.env`
   - Update `MONGO_URI` with your MongoDB connection string
   - For local: `mongodb://localhost:27017/mern-projects`
   - For Atlas: Your MongoDB Atlas connection string

3. **Start Backend Server**
   ```bash
   cd backend
   npm run dev
   ```
   Server runs on `http://localhost:5000`

4. **Frontend Setup**
   ```bash
   cd frontend
   npm install
   ```

5. **Start Frontend Application**
   ```bash
   cd frontend
   npm run dev
   ```
   Application runs on `http://localhost:3000`

---

## Application Features

### Main Features

1. **Project List View** - View all projects in a card-based grid layout
2. **Create Project** - Add new projects with name and description
3. **View Project Details** - See complete project information
4. **Edit Project** - Update project information
5. **More Menu Operations** - Additional actions via 3-dot menu

### Project Properties

Each project contains:
- **Name** (required) - Project title
- **Description** (optional) - Project details
- **Status** - Either "active" or "archived"
- **Favorite** - Boolean flag to mark important projects
- **Created At** - Timestamp when project was created
- **Updated At** - Timestamp when project was last modified

---

## Operations Guide

### 1. View All Projects

**Location:** Home page (`/`)

**What it does:**
- Displays all projects in a responsive grid layout
- Shows project name, description, status, and favorite indicator
- Each project card displays:
  - Project name with star (⭐) if marked as favorite
  - Description (truncated if long)
  - Status badge (green for active, yellow for archived)
  - "View Details" link
  - More Menu (3-dot button) for additional actions

**How to use:**
- Navigate to the home page
- All projects are automatically loaded and displayed

---

### 2. Create a New Project

**Location:** Create Project page (`/create`)

**What it does:**
- Allows you to create a new project with name and description
- Validates that project name is provided (required field)
- Creates a new project in the database with default values:
  - Status: "active"
  - Favorite: false

**How to use:**
1. Click "Add New Project" button on the home page
2. Enter project name (required)
3. Enter project description (optional)
4. Click "Create Project" button
5. You'll be redirected to the project list

**API Operation:** `POST /api/projects`

---

### 3. View Project Details

**Location:** Project View page (`/view/:id`)

**What it does:**
- Displays complete information about a single project
- Shows all project properties in an organized layout
- Provides quick access to edit and navigation options

**How to use:**
1. Click "View Details →" link on any project card, OR
2. Click "View" option from the More Menu (3-dot menu)
3. View all project information including:
   - Project name
   - Full description
   - Status badge
   - Favorite indicator (⭐ if favorite)
   - Creation date and time
   - Last update date and time

**API Operation:** `GET /api/projects/:id`

---

### 4. Edit Project

**Location:** Edit Project page (`/edit/:id`)

**What it does:**
- Allows you to modify project name and description
- Pre-fills the form with existing project data
- Updates the project in the database
- Updates the "updatedAt" timestamp automatically

**How to use:**
1. Click "Edit" option from the More Menu, OR
2. Click "Edit Project" button on the project view page
3. Modify the project name or description
4. Click "Update Project" button
5. You'll be redirected to the project list

**API Operation:** `PUT /api/projects/:id`

---

### 5. Delete Project

**Location:** More Menu → Delete

**What it does:**
- Permanently removes a project from the database
- This action cannot be undone
- Shows a confirmation dialog before deletion

**How to use:**
1. Click the 3-dot menu (⋮) on any project card
2. Click "Delete" option (red text at bottom)
3. Confirm deletion in the popup dialog
4. Project is immediately removed from the list

**API Operation:** `DELETE /api/projects/:id`

**⚠️ Warning:** This action is permanent and cannot be undone!

---

### 6. Archive / Unarchive Project

**Location:** More Menu → Archive / Unarchive

**What it does:**
- Toggles project status between "active" and "archived"
- Archived projects are still visible but marked differently
- Useful for organizing projects without deleting them

**How to use:**
1. Click the 3-dot menu (⋮) on any project card
2. Click "Archive / Unarchive"
3. Project status toggles:
   - Active → Archived (yellow badge)
   - Archived → Active (green badge)

**API Operation:** `PATCH /api/projects/:id/archive`

**Note:** Archived projects appear with a yellow/warning badge instead of green.

---

### 7. Mark as Favorite / Unfavorite

**Location:** More Menu → Favorite / Unfavorite

**What it does:**
- Toggles the favorite status of a project
- Favorite projects display a star (⭐) icon
- Helps you quickly identify important projects

**How to use:**
1. Click the 3-dot menu (⋮) on any project card
2. Click "Favorite / Unfavorite" (with ⭐ icon)
3. Project favorite status toggles:
   - Not favorite → Favorite (shows ⭐)
   - Favorite → Not favorite (removes ⭐)

**API Operation:** `PATCH /api/projects/:id/favorite`

**Visual Indicator:** Favorite projects show a ⭐ star icon next to the project name.

---

### 8. Duplicate Project

**Location:** More Menu → Duplicate

**What it does:**
- Creates an exact copy of a project
- New project has the same description
- New project name is appended with " (Copy)"
- New project is set to "active" status
- New project is not marked as favorite

**How to use:**
1. Click the 3-dot menu (⋮) on any project card
2. Click "Duplicate"
3. A new project is created with:
   - Name: "[Original Name] (Copy)"
   - Same description as original
   - Status: "active"
   - Favorite: false

**API Operation:** `POST /api/projects/:id/duplicate`

**Use Case:** Useful when you want to create similar projects or use a project as a template.

---

## How It Works

### Application Flow

1. **Frontend (React)**
   - User interacts with the React UI
   - Components make API calls using Axios
   - State management with React hooks (useState, useEffect)
   - Routing handled by React Router

2. **Backend (Express)**
   - Receives HTTP requests from frontend
   - Routes requests to appropriate controllers
   - Controllers interact with MongoDB via Mongoose
   - Returns JSON responses to frontend

3. **Database (MongoDB)**
   - Stores project data in collections
   - Mongoose provides schema validation
   - Automatic timestamps (createdAt, updatedAt)

### Data Flow Example: Creating a Project

```
User fills form → React component → Axios POST request 
→ Express server → Controller → Mongoose model 
→ MongoDB save → Response back → React updates UI
```

### More Menu System

The More Menu (3-dot button) provides quick access to multiple operations:
- **View** - Navigate to project details page
- **Edit** - Navigate to edit form
- **Archive/Unarchive** - Toggle status (immediate action)
- **Favorite/Unfavorite** - Toggle favorite (immediate action)
- **Duplicate** - Create copy (immediate action)
- **Delete** - Remove project (with confirmation)

All immediate actions (Archive, Favorite, Duplicate) update the database and refresh the project list automatically.

---

## Technical Architecture

### Backend Structure

```
backend/
├── config/
│   └── db.js          # MongoDB connection
├── controllers/
│   └── projectController.js  # Business logic
├── models/
│   └── Project.js     # Mongoose schema
├── routes/
│   └── projectRoutes.js  # API endpoints
├── server.js          # Express server setup
└── .env              # Environment variables
```

### Frontend Structure

```
frontend/
├── src/
│   ├── components/
│   │   └── MoreMenu.jsx    # 3-dot menu component
│   ├── pages/
│   │   ├── ProjectList.jsx   # Home page
│   │   ├── ProjectForm.jsx  # Create/Edit form
│   │   └── ProjectView.jsx  # Details page
│   ├── api.js          # API helper functions
│   └── App.jsx         # Main app with routing
```

### API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/projects` | Create new project |
| GET | `/api/projects` | Get all projects |
| GET | `/api/projects/:id` | Get single project |
| PUT | `/api/projects/:id` | Update project |
| DELETE | `/api/projects/:id` | Delete project |
| PATCH | `/api/projects/:id/archive` | Toggle archive status |
| PATCH | `/api/projects/:id/favorite` | Toggle favorite status |
| POST | `/api/projects/:id/duplicate` | Duplicate project |

---

## Best Practices

1. **Always confirm before deleting** - The app shows a confirmation dialog
2. **Use favorites** - Mark important projects with ⭐ for quick identification
3. **Archive instead of delete** - Archive projects you don't need now but might need later
4. **Use descriptions** - Add detailed descriptions to help organize your projects
5. **Duplicate for templates** - Use duplicate feature to create similar projects quickly

---

## Troubleshooting

### Projects not loading?
- Check if backend server is running on port 5000
- Verify MongoDB connection in `backend/.env`
- Check browser console for errors

### Can't create/edit projects?
- Ensure backend is running
- Check network tab in browser DevTools
- Verify API endpoint is accessible

### More Menu not working?
- Click outside the menu to close it
- Try refreshing the page
- Check browser console for JavaScript errors

---

## Summary

This application provides a complete project management solution with:

✅ **Full CRUD Operations** - Create, Read, Update, Delete projects
✅ **More Menu Actions** - Archive, Favorite, Duplicate operations
✅ **Modern UI** - Card-based layout with responsive design
✅ **RESTful API** - Clean backend architecture
✅ **Real-time Updates** - Changes reflect immediately

All operations are intuitive and user-friendly, making project management efficient and straightforward.

