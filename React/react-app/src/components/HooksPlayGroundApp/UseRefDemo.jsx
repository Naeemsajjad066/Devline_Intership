import React, { useRef, useState, useEffect } from "react";

export default function UseRefDemo() {
  const inputRef = useRef();
  const [value, setValue] = useState("");
  const prevValue = useRef("");

  useEffect(() => {
    prevValue.current = value;
  }, [value]);

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ marginBottom: "20px" }}>useRef Demo</h2>

      {/* Input Box */}
      <div
        style={{
          border: "1px solid #e5e7eb",
          padding: "15px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <input
          ref={inputRef}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          placeholder="Type something..."
          style={{
            padding: "8px",
            width: "80%",
            borderRadius: "6px",
            border: "1px solid #ccc",
            outline: "none",
            marginBottom: "10px",
          }}
        />

        <br />

        <button
          onClick={() => inputRef.current.focus()}
          style={{
            padding: "8px 12px",
            border: "none",
            borderRadius: "6px",
            backgroundColor: "#2563eb",
            color: "white",
            cursor: "pointer",
          }}
        >
          Focus Input
        </button>
      </div>

      {/* Value Box */}
      <div
        style={{
          border: "1px solid #e5e7eb",
          padding: "15px",
          borderRadius: "8px",
        }}
      >
        <p style={{ margin: "5px 0" }}>
          <strong>Current:</strong> {value}
        </p>

        <p style={{ margin: "5px 0" }}>
          <strong>Previous:</strong> {prevValue.current}
        </p>
      </div>
    </div>
  );
}