import React, { useState } from "react";

export default function UseStateDemo() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div
      style={{
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: "20px" }}>useState Demo</h2>

      {/* Counter Box */}
      <div
        style={{
          border: "1px solid #e5e7eb",
          padding: "15px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <h3>Count: {count}</h3>

        <button
          onClick={() => setCount(count + 1)}
          style={{
            padding: "8px 12px",
            border: "none",
            borderRadius: "6px",
            backgroundColor: "#2563eb",
            color: "white",
            cursor: "pointer",
          }}
        >
          Increase
        </button>
      </div>

      {/* Input Box */}
      <div
        style={{
          border: "1px solid #e5e7eb",
          padding: "15px",
          borderRadius: "8px",
        }}
      >
        <h3>Text: {text}</h3>

        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          style={{
            padding: "8px",
            width: "80%",
            borderRadius: "6px",
            border: "1px solid #ccc",
            outline: "none",
          }}
          placeholder="Type something..."
        />
      </div>
    </div>
  );
}