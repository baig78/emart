import React from "react";

const Header = (categories) => {
  return (
    <>
      <header className="bg-light text-white p-3 d-flex justify-content-between align-items-center ">
        <div className="d-flex align-items-center">
          <h2 style={{ marginLeft: "245px", color: "#640000" }}>Footwear</h2>
        </div>
        <input
          type="text"
          className="form-control"
          placeholder="Search..."
          style={{ width: "300px" }}
        />
      </header>
    </>
  );
};

export default Header;
