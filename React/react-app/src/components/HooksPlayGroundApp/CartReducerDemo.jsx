import React, { useReducer } from "react";

const initialState = { cart: [] };

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { cart: [...state.cart, action.item] };
    case "REMOVE":
      return {
        cart: state.cart.filter((_, i) => i !== action.index),
      };
    default:
      return state;
  }
}

export default function CartReducerDemo() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ marginBottom: "20px" }}>useReducer Cart Demo</h2>

      {/* Add Button */}
      <button
        onClick={() =>
          dispatch({ type: "ADD", item: "Item " + Date.now() })
        }
        style={{
          padding: "8px 12px",
          border: "none",
          borderRadius: "6px",
          backgroundColor: "#2563eb",
          color: "white",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Add Item
      </button>

      {/* Cart Box */}
      <div
        style={{
          border: "1px solid #e5e7eb",
          padding: "15px",
          borderRadius: "8px",
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        {state.cart.length === 0 ? (
          <p style={{ color: "#888" }}>Cart is empty</p>
        ) : (
          state.cart.map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "8px",
                marginBottom: "8px",
                border: "1px solid #f1f1f1",
                borderRadius: "6px",
                backgroundColor: "#fafafa",
              }}
            >
              <span>{item}</span>

              <button
                onClick={() => dispatch({ type: "REMOVE", index: i })}
                style={{
                  padding: "5px 10px",
                  border: "none",
                  borderRadius: "6px",
                  backgroundColor: "#ef4444",
                  color: "white",
                  cursor: "pointer",
                }}
              >
                Remove
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}