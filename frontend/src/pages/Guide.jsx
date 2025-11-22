import { Link } from "react-router-dom";
import "./Guide.css";

export default function Guide() {
  return (
    <div className="guide-container">
      <div className="guide-content">
        <div className="guide-header">
          <h1 className="guide-title">User Guide</h1>
          <p className="guide-subtitle">Learn how to use the Project Management Application</p>
          <Link to="/" className="btn btn-secondary">
            Back to Projects
          </Link>
        </div>

        <div className="guide-section">
          <h2>Overview</h2>
          <p>
            This is a full-stack MERN (MongoDB, Express, React, Node.js) application for managing projects. 
            It provides a complete CRUD (Create, Read, Update, Delete) interface with additional operations 
            through a "More Menu" feature.
          </p>
        </div>

        <div className="guide-section">
          <h2>Getting Started</h2>
          <div className="guide-subsection">
            <h3>Prerequisites</h3>
            <ul>
              <li>Node.js (v14 or higher)</li>
              <li>MongoDB (local installation or MongoDB Atlas account)</li>
              <li>npm or yarn package manager</li>
            </ul>
          </div>
          <div className="guide-subsection">
            <h3>Installation Steps</h3>
            <ol>
              <li><strong>Backend Setup:</strong> Navigate to backend folder and run <code>npm install</code></li>
              <li><strong>Configure MongoDB:</strong> Update <code>backend/.env</code> with your MongoDB connection string</li>
              <li><strong>Start Backend:</strong> Run <code>npm run dev</code> in backend folder (runs on port 5000)</li>
              <li><strong>Frontend Setup:</strong> Navigate to frontend folder and run <code>npm install</code></li>
              <li><strong>Start Frontend:</strong> Run <code>npm run dev</code> in frontend folder (runs on port 3000)</li>
            </ol>
          </div>
        </div>

        <div className="guide-section">
          <h2>Application Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <h3>Project List View</h3>
              <p>View all projects in a card-based grid layout with status indicators and favorite markers.</p>
            </div>
            <div className="feature-card">
              <h3>Create Project</h3>
              <p>Add new projects with name (required) and description (optional).</p>
            </div>
            <div className="feature-card">
              <h3>View Project Details</h3>
              <p>See complete project information including timestamps and status.</p>
            </div>
            <div className="feature-card">
              <h3>Edit Project</h3>
              <p>Update project name and description with automatic timestamp updates.</p>
            </div>
            <div className="feature-card">
              <h3>More Menu Operations</h3>
              <p>Access additional actions via the 3-dot menu on each project card.</p>
            </div>
          </div>
        </div>

        <div className="guide-section">
          <h2>Operations Guide</h2>

          <div className="operation-card">
            <div className="operation-header">
              <h3>1. View All Projects</h3>
              <span className="operation-badge">READ</span>
            </div>
            <p><strong>Location:</strong> Home page</p>
            <p><strong>What it does:</strong> Displays all projects in a responsive grid layout showing project name, description, status, and favorite indicator.</p>
            <p><strong>How to use:</strong> Navigate to the home page - all projects are automatically loaded and displayed.</p>
          </div>

          <div className="operation-card">
            <div className="operation-header">
              <h3>2. Create a New Project</h3>
              <span className="operation-badge create">CREATE</span>
            </div>
            <p><strong>Location:</strong> Create Project page</p>
            <p><strong>What it does:</strong> Creates a new project with name and description. Project is created with default values: Status "active" and Favorite "false".</p>
            <p><strong>How to use:</strong></p>
            <ol>
              <li>Click "Add New Project" button on the home page</li>
              <li>Enter project name (required)</li>
              <li>Enter project description (optional)</li>
              <li>Click "Create Project" button</li>
              <li>You'll be redirected to the project list</li>
            </ol>
            <p><strong>API:</strong> <code>POST /api/projects</code></p>
          </div>

          <div className="operation-card">
            <div className="operation-header">
              <h3>3. View Project Details</h3>
              <span className="operation-badge">READ</span>
            </div>
            <p><strong>Location:</strong> Project View page</p>
            <p><strong>What it does:</strong> Displays complete information about a single project including all properties and timestamps.</p>
            <p><strong>How to use:</strong></p>
            <ol>
              <li>Click "View Details →" link on any project card, OR</li>
              <li>Click "View" option from the More Menu</li>
            </ol>
            <p><strong>API:</strong> <code>GET /api/projects/:id</code></p>
          </div>

          <div className="operation-card">
            <div className="operation-header">
              <h3>4. Edit Project</h3>
              <span className="operation-badge update">UPDATE</span>
            </div>
            <p><strong>Location:</strong> Edit Project page</p>
            <p><strong>What it does:</strong> Allows you to modify project name and description. Updates the "updatedAt" timestamp automatically.</p>
            <p><strong>How to use:</strong></p>
            <ol>
              <li>Click "Edit" option from the More Menu, OR</li>
              <li>Click "Edit Project" button on the project view page</li>
              <li>Modify the project name or description</li>
              <li>Click "Update Project" button</li>
              <li>You'll be redirected to the project list</li>
            </ol>
            <p><strong>API:</strong> <code>PUT /api/projects/:id</code></p>
          </div>

          <div className="operation-card">
            <div className="operation-header">
              <h3>5. Delete Project</h3>
              <span className="operation-badge delete">DELETE</span>
            </div>
            <p><strong>Location:</strong> More Menu → Delete</p>
            <p><strong>What it does:</strong> Permanently removes a project from the database. This action cannot be undone.</p>
            <p><strong>How to use:</strong></p>
            <ol>
              <li>Click the 3-dot menu (⋮) on any project card</li>
              <li>Click "Delete" option (red text at bottom)</li>
              <li>Confirm deletion in the popup dialog</li>
              <li>Project is immediately removed from the list</li>
            </ol>
            <p><strong>API:</strong> <code>DELETE /api/projects/:id</code></p>
            <div className="warning-box">
              <strong>⚠️ Warning:</strong> This action is permanent and cannot be undone!
            </div>
          </div>

          <div className="operation-card">
            <div className="operation-header">
              <h3>6. Archive / Unarchive Project</h3>
              <span className="operation-badge">UPDATE</span>
            </div>
            <p><strong>Location:</strong> More Menu → Archive / Unarchive</p>
            <p><strong>What it does:</strong> Toggles project status between "active" and "archived". Archived projects are still visible but marked differently.</p>
            <p><strong>How to use:</strong></p>
            <ol>
              <li>Click the 3-dot menu (⋮) on any project card</li>
              <li>Click "Archive / Unarchive"</li>
              <li>Project status toggles: Active → Archived (yellow badge) or Archived → Active (green badge)</li>
            </ol>
            <p><strong>API:</strong> <code>PATCH /api/projects/:id/archive</code></p>
            <p><strong>Note:</strong> Archived projects appear with a yellow/warning badge instead of green.</p>
          </div>

          <div className="operation-card">
            <div className="operation-header">
              <h3>7. Mark as Favorite / Unfavorite</h3>
              <span className="operation-badge">UPDATE</span>
            </div>
            <p><strong>Location:</strong> More Menu → Favorite / Unfavorite</p>
            <p><strong>What it does:</strong> Toggles the favorite status of a project. Favorite projects display a ⭐ star icon.</p>
            <p><strong>How to use:</strong></p>
            <ol>
              <li>Click the 3-dot menu (⋮) on any project card</li>
              <li>Click "Favorite / Unfavorite" (with ⭐ icon)</li>
              <li>Project favorite status toggles: Not favorite → Favorite (shows ⭐) or Favorite → Not favorite (removes ⭐)</li>
            </ol>
            <p><strong>API:</strong> <code>PATCH /api/projects/:id/favorite</code></p>
            <p><strong>Visual Indicator:</strong> Favorite projects show a ⭐ star icon next to the project name.</p>
          </div>

          <div className="operation-card">
            <div className="operation-header">
              <h3>8. Duplicate Project</h3>
              <span className="operation-badge create">CREATE</span>
            </div>
            <p><strong>Location:</strong> More Menu → Duplicate</p>
            <p><strong>What it does:</strong> Creates an exact copy of a project. New project has the same description, name appended with " (Copy)", status set to "active", and not marked as favorite.</p>
            <p><strong>How to use:</strong></p>
            <ol>
              <li>Click the 3-dot menu (⋮) on any project card</li>
              <li>Click "Duplicate"</li>
              <li>A new project is created with: Name: "[Original Name] (Copy)", Same description, Status: "active", Favorite: false</li>
            </ol>
            <p><strong>API:</strong> <code>POST /api/projects/:id/duplicate</code></p>
            <p><strong>Use Case:</strong> Useful when you want to create similar projects or use a project as a template.</p>
          </div>
        </div>

        <div className="guide-section">
          <h2>How It Works</h2>
          <div className="guide-subsection">
            <h3>Application Flow</h3>
            <ol>
              <li><strong>Frontend (React):</strong> User interacts with the React UI. Components make API calls using Axios. State management with React hooks. Routing handled by React Router.</li>
              <li><strong>Backend (Express):</strong> Receives HTTP requests from frontend. Routes requests to appropriate controllers. Controllers interact with MongoDB via Mongoose. Returns JSON responses to frontend.</li>
              <li><strong>Database (MongoDB):</strong> Stores project data in collections. Mongoose provides schema validation. Automatic timestamps (createdAt, updatedAt).</li>
            </ol>
          </div>
          <div className="guide-subsection">
            <h3>Data Flow Example: Creating a Project</h3>
            <div className="flow-diagram">
              <p>User fills form → React component → Axios POST request → Express server → Controller → Mongoose model → MongoDB save → Response back → React updates UI</p>
            </div>
          </div>
        </div>

        <div className="guide-section">
          <h2>API Endpoints</h2>
          <div className="api-table">
            <table>
              <thead>
                <tr>
                  <th>Method</th>
                  <th>Endpoint</th>
                  <th>Description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><span className="method-badge post">POST</span></td>
                  <td><code>/api/projects</code></td>
                  <td>Create new project</td>
                </tr>
                <tr>
                  <td><span className="method-badge get">GET</span></td>
                  <td><code>/api/projects</code></td>
                  <td>Get all projects</td>
                </tr>
                <tr>
                  <td><span className="method-badge get">GET</span></td>
                  <td><code>/api/projects/:id</code></td>
                  <td>Get single project</td>
                </tr>
                <tr>
                  <td><span className="method-badge put">PUT</span></td>
                  <td><code>/api/projects/:id</code></td>
                  <td>Update project</td>
                </tr>
                <tr>
                  <td><span className="method-badge delete">DELETE</span></td>
                  <td><code>/api/projects/:id</code></td>
                  <td>Delete project</td>
                </tr>
                <tr>
                  <td><span className="method-badge patch">PATCH</span></td>
                  <td><code>/api/projects/:id/archive</code></td>
                  <td>Toggle archive status</td>
                </tr>
                <tr>
                  <td><span className="method-badge patch">PATCH</span></td>
                  <td><code>/api/projects/:id/favorite</code></td>
                  <td>Toggle favorite status</td>
                </tr>
                <tr>
                  <td><span className="method-badge post">POST</span></td>
                  <td><code>/api/projects/:id/duplicate</code></td>
                  <td>Duplicate project</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="guide-section">
          <h2>Best Practices</h2>
          <ul className="best-practices">
            <li><strong>Always confirm before deleting</strong> - The app shows a confirmation dialog</li>
            <li><strong>Use favorites</strong> - Mark important projects with ⭐ for quick identification</li>
            <li><strong>Archive instead of delete</strong> - Archive projects you don't need now but might need later</li>
            <li><strong>Use descriptions</strong> - Add detailed descriptions to help organize your projects</li>
            <li><strong>Duplicate for templates</strong> - Use duplicate feature to create similar projects quickly</li>
          </ul>
        </div>

        <div className="guide-section">
          <h2>Troubleshooting</h2>
          <div className="troubleshooting">
            <div className="trouble-item">
              <h4>Projects not loading?</h4>
              <ul>
                <li>Check if backend server is running on port 5000</li>
                <li>Verify MongoDB connection in <code>backend/.env</code></li>
                <li>Check browser console for errors</li>
              </ul>
            </div>
            <div className="trouble-item">
              <h4>Can't create/edit projects?</h4>
              <ul>
                <li>Ensure backend is running</li>
                <li>Check network tab in browser DevTools</li>
                <li>Verify API endpoint is accessible</li>
              </ul>
            </div>
            <div className="trouble-item">
              <h4>More Menu not working?</h4>
              <ul>
                <li>Click outside the menu to close it</li>
                <li>Try refreshing the page</li>
                <li>Check browser console for JavaScript errors</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="guide-footer">
          <Link to="/" className="btn btn-primary">
            Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

