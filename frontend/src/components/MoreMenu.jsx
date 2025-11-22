import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import "./MoreMenu.css";

export default function MoreMenu({
  id,
  onDelete,
  onArchive,
  onFavorite,
  onDuplicate,
}) {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [open]);

  return (
    <div className="more-menu-container" ref={menuRef}>
      <button
        className="more-menu-button"
        onClick={() => setOpen((prev) => !prev)}
        aria-label="More options"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="12" cy="12" r="1" />
          <circle cx="12" cy="5" r="1" />
          <circle cx="12" cy="19" r="1" />
        </svg>
      </button>

      {open && (
        <div className="more-menu-dropdown">
          <Link
            to={`/view/${id}`}
            onClick={() => setOpen(false)}
            className="more-menu-item"
          >
            View
          </Link>
          <Link
            to={`/edit/${id}`}
            onClick={() => setOpen(false)}
            className="more-menu-item"
          >
            Edit
          </Link>
          <button
            onClick={() => {
              onArchive(id);
              setOpen(false);
            }}
            className="more-menu-item"
          >
            Archive / Unarchive
          </button>
          <button
            onClick={() => {
              onFavorite(id);
              setOpen(false);
            }}
            className="more-menu-item"
          >
            <span className="menu-icon">⭐</span>
            Favorite / Unfavorite
          </button>
          <button
            onClick={() => {
              onDuplicate(id);
              setOpen(false);
            }}
            className="more-menu-item"
          >
            Duplicate
          </button>
          <div className="more-menu-divider" />
          <button
            onClick={() => {
              if (window.confirm("Are you sure you want to delete this project?")) {
                onDelete(id);
              }
              setOpen(false);
            }}
            className="more-menu-item more-menu-item-danger"
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

