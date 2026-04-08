import React, { useState } from "react";
import UseStateDemo from "../components/HooksPlayGroundApp/UseStateDemo";
import UseEffectDemo from "../components/HooksPlayGroundApp/UseEffectDemo";
import UseRefDemo from "../components/HooksPlayGroundApp/UseRefDemo";
import UseMemoCallbackDemo from "../components/HooksPlayGroundApp/UseMemoCallbackDemo";
import CartReducerDemo from "../components/HooksPlayGroundApp/CartReducerDemo";

export default function HooksPlayGround() {
  const [tab, setTab] = useState("state");

  const renderComponent = () => {
    switch (tab) {
      case "state":
        return <UseStateDemo />;
      case "effect":
        return <UseEffectDemo />;
      case "ref":
        return <UseRefDemo />;
      case "memo":
        return <UseMemoCallbackDemo />;
      case "reducer":
        return <CartReducerDemo />;
      default:
        return null;
    }
  };

  const btnStyle = (active) => ({
    padding: "10px 14px",
    margin: "5px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
    backgroundColor: active ? "#2563eb" : "#e5e7eb",
    color: active ? "white" : "#111",
    fontWeight: "500",
  });

  return (
    <div
      style={{
        fontFamily: "Arial",
        backgroundColor: "#f4f6f8",
        minHeight: "100vh",
        paddingBottom: "40px",
      }}
    >
      {/* Header */}
      <div
        style={{
          backgroundColor: "#111827",
          color: "white",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <h1 style={{ margin: 0 }}>React Hooks Playground</h1>
        <p style={{ margin: "5px 0 0", fontSize: "14px", opacity: 0.8 }}>
          Learn React Hooks Practically
        </p>
      </div>

      {/* Tabs */}
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          style={btnStyle(tab === "state")}
          onClick={() => setTab("state")}
        >
          useState
        </button>

        <button
          style={btnStyle(tab === "effect")}
          onClick={() => setTab("effect")}
        >
          useEffect
        </button>

        <button style={btnStyle(tab === "ref")} onClick={() => setTab("ref")}>
          useRef
        </button>

        <button
          style={btnStyle(tab === "memo")}
          onClick={() => setTab("memo")}
        >
          useMemo/useCallback
        </button>

        <button
          style={btnStyle(tab === "reducer")}
          onClick={() => setTab("reducer")}
        >
          useReducer
        </button>
      </div>

      {/* Content Card */}
      <div
        style={{
          maxWidth: "800px",
          margin: "30px auto",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
        }}
      >
        {renderComponent()}
      </div>
    </div>
  );
}