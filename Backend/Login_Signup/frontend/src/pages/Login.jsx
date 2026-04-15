import React, { useState } from "react";
import API from '../api.js'
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", form);
      localStorage.setItem("token", res.data.token);
      navigate("/");
    } catch (err) {
      alert(err.response?.data?.message || "Error");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>Welcome Back</h1>
        <p style={styles.subtitle}>Login to continue</p>

        <form onSubmit={handleSubmit} style={styles.form}>
          <input name="email" placeholder="Email" value={form.email} onChange={handleChange} style={styles.input} />
          <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} style={styles.input} />

          <button type="submit" style={styles.button}>
            Login
          </button>
        </form>

        <p style={styles.text}>
          Don’t have an account?{" "}
          <span style={styles.link} onClick={() => navigate("/signup")}>
            Sign Up
          </span>
        </p>
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
    width: "380px",
    padding: "30px",
    background: "#fff",
    borderRadius: "16px",
    boxShadow: "90px rgba(0,0,0,0.08)",
    textAlign: "center",
  },
  title: {
    color: "#111827",
  },
  subtitle: {
    color: "#6B7280",
    fontSize: "14px",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  input: {
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #E5E7EB",
    outline: "none",
  },
  button: {
    padding: "12px",
    border: "none",
    borderRadius: "10px",
    background: "#4F46E5",
    color: "white",
    fontWeight: "bold",
    cursor: "pointer",
  },
  text: {
    marginTop: "15px",
    fontSize: "13px",
    color: "#6B7280",
  },
  link: {
    color: "#4F46E5",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Login;