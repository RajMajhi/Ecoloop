import React, { useState } from "react";


const SearchBar = () => {
  const[loading,setLoading]=useState(false);
  const[stage,setStage]=useState("🌱");

  const handleSearch=()=>{
    setLoading(true);
    setStage("🌱");

    setTimeout(()=>{

      setStage("🌿");
    }, 600); 
    setTimeout(()=>{
      setStage("🌳");
    }, 1400);
    setTimeout(()=>{
      setLoading(false);
      setStage("🌱");
    },2000);
  };
  return (
    <div style={{ marginTop: "20px", marginBottom: "20px" }}>
      <div style={{ display: "flex", gap: "10px" }}>
      <input
        type="text"
        placeholder="Search eco-friendly products..."
        style={{
          width: "100%",
          maxWidth: "420px",
          padding: "12px 16px",
          borderRadius: "10px",
          border: "1px solid #ccc",
          outline: "none",
          fontSize: "16px"
        }}
      />
      <button onClick={handleSearch} style={{
        padding:"12px 20px",
        borderRadius:"10px",
        border:"none",
        backgroundColor:"#4CAF50",
        color:"white",
        cursor:"pointer",
        marginLeft:"10px",
        fontSize:"16px"
    }}>
        Search
      </button>
    </div>
     {loading && (
        <div
          style={{
            marginTop: "20px",
            textAlign: "center",
            fontSize: "40px",
            
          }}
        >
          {stage}
          <p
            style={{
              marginTop: "8px",
              fontSize: "14px",
              color: "#2E7D32",
              fontWeight: "bold",
            }}
          >
            Growing a greener future...
          </p>
        </div>
      )}
</div>
  );
};

export default SearchBar;