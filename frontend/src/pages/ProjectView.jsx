import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getProject } from "../api";
import "./ProjectView.css";

export default function ProjectView() {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProject(id)
      .then(({ data }) => {
        setProject(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching project:", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="project-view-container">
        <div className="loading-spinner">Loading project details...</div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="project-view-container">
        <div className="error-state">
          <h2>Project not found</h2>
          <p>The project you're looking for doesn't exist or has been deleted.</p>
          <Link to="/" className="btn btn-primary">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="project-view-container">
      <div className="project-view-card card">
        <div className="project-view-header">
          <div className="project-title-section">
            <div style={{ display: "flex", alignItems: "center", gap: "16px", flexWrap: "wrap" }}>
              <h1 className="project-view-title">{project.name}</h1>
              {project.isFavorite && (
                <span className="favorite-badge" title="Favorite">⭐ Favorite</span>
              )}
            </div>
            <Link to="/guide" className="btn btn-secondary" style={{ fontSize: "14px", padding: "8px 16px", marginTop: "12px" }}>
              User Guide
            </Link>
          </div>
          <span
            className={`badge ${
              project.status === "active" ? "badge-success" : "badge-warning"
            }`}
          >
            {project.status}
          </span>
        </div>

        <div className="project-view-content">
          <div className="info-section">
            <h3 className="info-section-title">Description</h3>
            <p className="project-description-text">
              {project.description || (
                <span className="no-description">No description provided</span>
              )}
            </p>
          </div>

          <div className="info-grid">
            <div className="info-item">
              <span className="info-label">⭐ Favorite</span>
              <span className="info-value">
                {project.isFavorite ? "Yes" : "No"}
              </span>
            </div>
            <div className="info-item">
              <span className="info-label">Created</span>
              <span className="info-value">
                {new Date(project.createdAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
            {project.updatedAt && (
              <div className="info-item">
                <span className="info-label">Last Updated</span>
                <span className="info-value">
                  {new Date(project.updatedAt).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
            )}
          </div>
        </div>

        <div className="project-view-actions">
          <Link to={`/edit/${id}`} className="btn btn-primary">
            Edit Project
          </Link>
          <Link to="/" className="btn btn-secondary">
            Back to Projects
          </Link>
        </div>
      </div>
    </div>
  );
}

