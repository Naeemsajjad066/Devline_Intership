import React, { useEffect, useState } from "react";
import API from "../services/api";

const Users = ({ setSelectedUser }) => {
  const [users, setUsers] = useState([]);
  const [age, setAge] = useState("");
  const [name, setName] = useState("");

  useEffect(() => {
    API.get("/users")
      .then((res) => setUsers(res.data))
      .catch(console.error);
  }, []);

  const createUser = () => {
    API.post("/users", {
      name,
      age: Number(age),
    })
      .then((res) => {
        setUsers([...users, res.data]);
        setName("");
        setAge("");
      })
      .catch((error) => {
        console.log(error.response?.data || error.message);
      });
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>👥 Users</h2>

      {/* USERS LIST */}
      <div style={styles.list}>
        {users.length === 0 ? (
          <p style={styles.empty}>No users found</p>
        ) : (
          users.map((user) => (
            <div
              key={user.id}
              onClick={() => setSelectedUser(user)}
              style={styles.card}
            >
              <span style={styles.name}>{user.name}</span>
              <span style={styles.age}>Age: {user.age}</span>
            </div>
          ))
        )}
      </div>

      {/* FORM */}
      <div style={styles.form}>
        <input
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={styles.input}
        />

        <input
          placeholder="Age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          style={styles.input}
        />

        <button onClick={createUser} style={styles.button}>
          ➕ Add User
        </button>
      </div>
    </div>
  );
};

export default Users;

/* STYLES */
const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial",
    maxWidth: "400px",
  },

  title: {
    marginBottom: "15px",
  },

  list: {
    marginBottom: "20px",
  },

  card: {
    padding: "10px",
    marginBottom: "8px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "space-between",
    transition: "0.2s",
  },

  name: {
    fontWeight: "bold",
  },

  age: {
    color: "gray",
  },

  empty: {
    color: "gray",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  input: {
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
  },

  button: {
    padding: "10px",
    backgroundColor: "#4f46e5",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};