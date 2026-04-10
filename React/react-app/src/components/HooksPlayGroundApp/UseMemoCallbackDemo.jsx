import React, { useMemo, useCallback, useState } from "react";

const Child = React.memo(({ onClick }) => {
  console.log("Child rendered");

  return (
    <div style={{ marginTop: "10px" }}>
      <button
        onClick={onClick}
        style={{
          padding: "8px 12px",
          border: "none",
          borderRadius: "6px",
          backgroundColor: "#10b981",
          color: "white",
          cursor: "pointer",
        }}
      >
        Child Button
      </button>
    </div>
  );
});

export default function UseMemoCallbackDemo() {
  const [count, setCount] = useState(0);
  const [toggle, setToggle] = useState(false);

  // ✅ useMemo = expensive calculation optimization
  const expensiveValue = useMemo(() => {
    console.log("Expensive calculation");
    return count * 10;
  }, [count]);

  // ✅ useCallback = stable function reference
  const handleClick = useCallback(() => {
    console.log("Child clicked");
    setCount((prev) => prev + 1); // FIXED (no stale state issue)
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ marginBottom: "20px" }}>
        useMemo + useCallback Demo (Performance Optimization)
      </h2>

      {/* Stats Box */}
      <div
        style={{
          border: "1px solid #e5e7eb",
          padding: "15px",
          borderRadius: "8px",
          marginBottom: "15px",
          maxWidth: "400px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <h3>Count: {count}</h3>
        <h3>Value: {expensiveValue}</h3>
      </div>

      {/* Buttons Box */}
      <div style={{ marginBottom: "15px" }}>
        <button
          onClick={() => setCount((c) => c + 1)}
          style={{
            marginRight: "10px",
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

        <button
          onClick={() => setToggle((t) => !t)}
          style={{
            padding: "8px 12px",
            border: "none",
            borderRadius: "6px",
            backgroundColor: "#f59e0b",
            color: "white",
            cursor: "pointer",
          }}
        >
          Toggle
        </button>
      </div>

      {/* Child Box */}
      <div
        style={{
          border: "1px solid #e5e7eb",
          padding: "15px",
          borderRadius: "8px",
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        <Child onClick={handleClick} />
      </div>
    </div>
  );
}