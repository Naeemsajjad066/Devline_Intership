import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api.js";

const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
     const fetchUser = async () => {
    try {
      const res = await API.get("/auth/me");
      setUser(res.data.user);
    } catch (err) {
      localStorage.removeItem("token")
      navigate("/login");
    }
  };

  fetchUser();
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <div style={styles.avatar}>
          {user?.name?.charAt(0).toUpperCase()}
        </div>

        <h1 style={styles.title}>Welcome {user?.name} 👋</h1>
        <p style={styles.subtitle}>{user?.email}</p>

        <button onClick={logout} style={styles.button}>
          Logout
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#F8FAFC",
    fontFamily: "Arial",
  },
  card: {
    width: "400px",
    background: "#fff",
    padding: "30px",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
    textAlign: "center",
  },
  avatar: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    background: "#4F46E5",
    color: "white",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "28px",
    fontWeight: "bold",
    margin: "0 auto 15px",
  },
  title: {
    color: "#111827",
  },
  subtitle: {
    color: "#6B7280",
    fontSize: "14px",
    marginBottom: "20px",
  },
  button: {
    padding: "12px",
    width: "100%",
    border: "none",
    borderRadius: "10px",
    background: "#4F46E5",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Home;