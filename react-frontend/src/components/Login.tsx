import React from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Login() {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/tasks");
  }
  return (
    <div>
      <button className="neutral-button" onClick={handleClick}>
        Go to my tasks list
      </button>
    </div>
  );
}
