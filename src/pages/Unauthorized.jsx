import React from "react";
import { useNavigate } from "react-router";

const Unauthorized = () => {
  const navigate = useNavigate();
  const handleBack = () => {
    navigate(-1);
  };
  return (
    <div>
      <h1>Unauthorized</h1>
      <button onClick={handleBack}>Go Back</button>
    </div>
  );
};

export default Unauthorized;
