const express = require("express");
const router = express.Router();
const {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
  toggleArchive,
  toggleFavorite,
  duplicateProject,
} = require("../controllers/projectController");

// CRUD
router.post("/", createProject);
router.get("/", getProjects);
router.get("/:id", getProjectById);
router.put("/:id", updateProject);
router.delete("/:id", deleteProject);

// More Menu actions
router.patch("/:id/archive", toggleArchive);
router.patch("/:id/favorite", toggleFavorite);
router.post("/:id/duplicate", duplicateProject);

module.exports = router;

