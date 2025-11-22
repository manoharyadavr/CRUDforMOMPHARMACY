import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { createProject, getProject, updateProject } from "../api";
import "./ProjectForm.css";

export default function ProjectForm() {
  const [form, setForm] = useState({ name: "", description: "" });
  const [loading, setLoading] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const isEdit = Boolean(id);

  useEffect(() => {
    if (isEdit) {
      setLoading(true);
      getProject(id)
        .then(({ data }) => {
          setForm({
            name: data.name,
            description: data.description || "",
          });
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching project:", error);
          setLoading(false);
        });
    }
  }, [id, isEdit]);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isEdit) {
        await updateProject(id, form);
      } else {
        await createProject(form);
      }
      navigate("/");
    } catch (error) {
      console.error("Error saving project:", error);
      alert("Error saving project. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  if (loading && isEdit) {
    return (
      <div className="form-container">
        <div className="loading-spinner">Loading project...</div>
      </div>
    );
  }

  return (
    <div className="form-container">
      <div className="form-card card">
        <div className="form-header">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "12px" }}>
            <div>
              <h1 className="form-title">
                {isEdit ? "Edit Project" : "Create New Project"}
              </h1>
              <p className="form-subtitle">
                {isEdit
                  ? "Update your project information"
                  : "Fill in the details to create a new project"}
              </p>
            </div>
            <Link to="/guide" className="btn btn-secondary" style={{ fontSize: "14px", padding: "8px 16px" }}>
              Guide
            </Link>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="project-form">
          <div className="form-group">
            <label htmlFor="name" className="form-label">
              Project Name <span className="required">*</span>
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              required
              className="input"
              placeholder="Enter project name"
              disabled={loading}
            />
          </div>

          <div className="form-group">
            <label htmlFor="description" className="form-label">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              rows="6"
              className="textarea"
              placeholder="Enter project description (optional)"
              disabled={loading}
            />
          </div>

          <div className="form-actions">
            <button
              type="submit"
              disabled={loading}
              className="btn btn-primary"
            >
              {loading ? (
                <>
                  <span className="spinner"></span>
                  Saving...
                </>
              ) : (
                <>
                  {isEdit ? "Update Project" : "Create Project"}
                </>
              )}
            </button>
            <Link to="/" className="btn btn-secondary">
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

