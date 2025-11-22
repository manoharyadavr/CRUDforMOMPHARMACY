import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getProjects,
  deleteProject,
  toggleArchive,
  toggleFavorite,
  duplicateProjectApi,
} from "../api";
import MoreMenu from "../components/MoreMenu";
import "./ProjectList.css";

export default function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const { data } = await getProjects();
      setProjects(data);
    } catch (error) {
      console.error("Error fetching projects:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await deleteProject(id);
      fetchData();
    } catch (error) {
      console.error("Error deleting project:", error);
    }
  };

  const handleArchive = async (id) => {
    try {
      await toggleArchive(id);
      fetchData();
    } catch (error) {
      console.error("Error archiving project:", error);
    }
  };

  const handleFavorite = async (id) => {
    try {
      await toggleFavorite(id);
      fetchData();
    } catch (error) {
      console.error("Error toggling favorite:", error);
    }
  };

  const handleDuplicate = async (id) => {
    try {
      await duplicateProjectApi(id);
      fetchData();
    } catch (error) {
      console.error("Error duplicating project:", error);
    }
  };

  if (loading) {
    return (
      <div className="project-list-container">
        <div className="loading-spinner">Loading projects...</div>
      </div>
    );
  }

  return (
    <div className="project-list-container">
      <div className="project-list-header">
        <div>
          <h1 className="page-title">Projects</h1>
          <p className="page-subtitle">Manage your projects efficiently</p>
        </div>
        <div className="header-actions">
          <Link to="/guide" className="btn btn-secondary" style={{ marginRight: "12px" }}>
            User Guide
          </Link>
          <Link to="/create" className="btn btn-primary">
            <span>+</span> Add New Project
          </Link>
        </div>
      </div>

      {projects.length === 0 ? (
        <div className="empty-state">
          <h2>No projects yet</h2>
          <p>Get started by creating your first project</p>
          <Link to="/create" className="btn btn-primary">
            Create Project
          </Link>
        </div>
      ) : (
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project._id} className="project-card card">
              <div className="project-card-header">
                <div className="project-title-section">
                  <h3 className="project-name">{project.name}</h3>
                  {project.isFavorite && (
                    <span className="favorite-icon" title="Favorite">⭐</span>
                  )}
                </div>
                <MoreMenu
                  id={project._id}
                  onDelete={handleDelete}
                  onArchive={handleArchive}
                  onFavorite={handleFavorite}
                  onDuplicate={handleDuplicate}
                />
              </div>
              
              <p className="project-description">
                {project.description || "No description provided"}
              </p>
              
              <div className="project-card-footer">
                <span
                  className={`badge ${
                    project.status === "active"
                      ? "badge-success"
                      : "badge-warning"
                  }`}
                >
                  {project.status}
                </span>
                <Link
                  to={`/view/${project._id}`}
                  className="view-link"
                >
                  View Details →
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

