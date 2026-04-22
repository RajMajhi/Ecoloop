import React from "react";

const SearchBar = () => {
  return (
    <div style={{ marginTop: "20px", marginBottom: "20px" }}>
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
    </div>
  );
};

export default SearchBar;