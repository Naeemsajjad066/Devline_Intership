import React, { useState } from "react";
import Users from "./pages/Users";
import Projects from "./pages/Projects";
import Items from "./pages/Items";

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div style={styles.container}>
      
      {/* LEFT PANEL - USERS */}
      <div style={styles.panel}>
        <Users
          setSelectedUser={(user) => {
            setSelectedUser(user);
            setSelectedProject(null);
          }}
        />
      </div>

      {/* MIDDLE PANEL - PROJECTS */}
      <div style={styles.panel}>
        <Projects
          user={selectedUser}
          setSelectedProject={setSelectedProject}
        />
      </div>

      {/* RIGHT PANEL - ITEMS */}
      <div style={styles.panel}>
        <Items project={selectedProject} />
      </div>

    </div>
  );
};

export default App;

/* STYLES */
const styles = {
  container: {
    display: "flex",
    gap: "20px",
    padding: "20px",
    backgroundColor: "#f5f6fa",
    minHeight: "100vh",
    fontFamily: "Arial",
  },

  panel: {
    flex: 1,
    backgroundColor: "#ffffff",
    borderRadius: "12px",
    padding: "15px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    overflowY: "auto",
    maxHeight: "90vh",
  },
};