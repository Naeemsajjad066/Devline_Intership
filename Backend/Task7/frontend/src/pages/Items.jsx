import React, { useEffect, useState } from "react";
import API from "../services/api";

const Items = ({ project }) => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  useEffect(() => {
    if (!project?.id) return;

    setItems([]);

    API.get(`/projects/${project.id}/items`)
      .then((res) => {
        setItems(res.data.projectItems || []);
      })
      .catch((error) => {
        console.log(error.response?.data || error.message);
      });
  }, [project?.id]);
  
//   const editItem=()=>{}

  const createItem = () => {
    if (!project?.id || !name || !price) return;

    API.post("/items", {
      name,
      price: Number(price),
      projectId: project.id,
    })
      .then(() => {
        return API.get(`/projects/${project.id}/items`);
      })
      .then((res) => {
        setItems(res.data.projectItems || []);
        setName("");
        setPrice("");
      })
      .catch(console.error);
  };

  if (!project) return <p style={styles.message}>Select a project</p>;

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📦 Items in {project.title}</h2>

      {items.length === 0 ? (
        <p style={styles.empty}>No items found</p>
      ) : (
        <div style={styles.grid}>
          {items.map((i) => (
            <div key={i.id} style={styles.card}>
              <h3 style={styles.name}>{i.name}</h3>
              <p style={styles.price}>💰 {i.price}</p>
              {/* <div>
                <button onClick={editItem}>edit</button>
                <button onClick={deleteItem}>delete</button>
              </div> */}
            </div>
          ))}
        </div>
      )}

      <div style={styles.form}>
        <input
          style={styles.input}
          type="text"
          placeholder="Item name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          style={styles.input}
          type="number"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />

        <button style={styles.button} onClick={createItem}>
          Add Item
        </button>
      </div>
    </div>
  );
};

export default Items;

/* ================= INLINE STYLES ================= */

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial",
    maxWidth: "500px",
  },

  title: {
    marginBottom: "15px",
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "10px",
    marginBottom: "20px",
  },

  card: {
    padding: "12px",
    border: "1px solid #ddd",
    borderRadius: "10px",
    backgroundColor: "#fff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.08)",
  },

  name: {
    margin: "0 0 5px 0",
  },

  price: {
    color: "green",
    fontWeight: "bold",
  },

  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  input: {
    padding: "8px",
    border: "1px solid #ccc",
    borderRadius: "6px",
  },

  button: {
    padding: "10px",
    backgroundColor: "#4f46e5",
    color: "white",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },

  empty: {
    color: "gray",
    fontStyle: "italic",
  },

  message: {
    color: "gray",
  },
};