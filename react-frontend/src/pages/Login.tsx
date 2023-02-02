import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  function submitHandler(event: any) {
    event.preventDefault();
    const requestOptions = {
      method: "POST",
      header: { "Content-Type": "applicaiton/json" },
      body: JSON.stringify({ email: email, password: pass }),
    };
    fetch("/users/login", requestOptions)
      .then((res) => res.json())
      .then((data) => {
        if (data.status !== 200) {
          // throw new Error(res.statusText)
        }
      });
  }

  function handleClick() {
    navigate("/tasks");
  }
  return (
    <>
      <form>
        <h1>Login</h1>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </label>
        <label>
          Password:
          <input
            type="password"
            value={pass}
            onChange={(e) => setPass(e.target.value)}
          ></input>
        </label>
        <button type="submit" onClick={submitHandler}>
          Login
        </button>
      </form>
    </>
  );
}
