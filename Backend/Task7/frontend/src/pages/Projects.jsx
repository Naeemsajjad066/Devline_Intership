import React, { useEffect, useState } from "react";
import API from "../services/api";

const Projects = ({ user, setSelectedProject }) => {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState("");

  const createProject = () => {
    if (!title || !user?.id) return;

    API.post("/projects", {
      title,
      userId: user.id,
    })
      .then((res) => {
        setProjects([...projects, res.data]);
        setTitle("");
      })
      .catch(console.error);
  };

  useEffect(() => {
    if (!user) return;

    API.get(`/users/${user.id}/projects`)
      .then((res) => setProjects(res.data))
      .catch(console.error);
  }, [user]);

  if (!user)
    return <p style={styles.message}>👈 Select a User</p>;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📁 Projects of {user.name}</h2>

      {/* PROJECT LIST */}
      {projects.length === 0 ? (
        <p style={styles.empty}>No Projects Found</p>
      ) : (
        <div style={styles.list}>
          {projects.map((p) => (
            <div
              key={p.id}
              onClick={() => setSelectedProject(p)}
              style={styles.card}
            >
              <span style={styles.projectTitle}>{p.title}</span>
              <span style={styles.arrow}>→</span>
            </div>
          ))}
        </div>
      )}

      {/* FORM */}
      <div style={styles.form}>
        <input
          style={styles.input}
          type="text"
          placeholder="Enter project title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <button style={styles.button} onClick={createProject}>
          ➕ Add Project
        </button>
      </div>
    </div>
  );
};

export default Projects;

/* ================= STYLES ================= */

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial",
    maxWidth: "420px",
    backgroundColor: "#f9fafb",
    borderRadius: "12px",
  },

  title: {
    marginBottom: "15px",
    fontSize: "18px",
    fontWeight: "bold",
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "20px",
  },

  card: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #e5e7eb",
    backgroundColor: "#fff",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    transition: "all 0.2s ease",
    boxShadow: "0 1px 3px rgba(0,0,0,0.06)",
  },

  projectTitle: {
    fontWeight: "600",
    color: "#111827",
  },

  arrow: {
    color: "#9ca3af",
    fontSize: "18px",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "10px",
  },

  input: {
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #d1d5db",
    outline: "none",
    fontSize: "14px",
    transition: "0.2s",
  },

  button: {
    padding: "10px",
    backgroundColor: "#4f46e5",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
    transition: "0.2s",
  },

  empty: {
    color: "#6b7280",
    fontStyle: "italic",
    marginBottom: "15px",
  },

  message: {
    color: "#6b7280",
  },
};