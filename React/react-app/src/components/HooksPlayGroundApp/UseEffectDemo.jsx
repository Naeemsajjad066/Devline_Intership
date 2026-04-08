import React, { useEffect, useState } from "react";

export default function UseEffectDemo() {
  const [data, setData] = useState([]);
  const [loading,setLoading]=useState(true)

  useEffect(() => {
    let ignore = false;

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((result) => {
        if (!ignore){
          setData(result);
          setLoading(false)
        } 
      });

    return () => {
      ignore = true; // cleanup
    };
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ marginBottom: "20px" }}>useEffect Demo (API)</h2>

      <div
        style={{
          border: "1px solid #e5e7eb",
          padding: "15px",
          borderRadius: "8px",
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        {loading?(<div><h3>Loading...</h3></div>):(
          data.slice(0, 5).map((user) => (
          <div
            key={user.id}
            style={{
              padding: "8px",
              marginBottom: "8px",
              border: "1px solid #f1f1f1",
              borderRadius: "6px",
              textAlign: "left",
              backgroundColor: "#fafafa",
            }}
          >
            {user.name}
          </div>
        )))}
        {}
      </div>
    </div>
  );
}