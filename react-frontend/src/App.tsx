import React from "react";
import "./App.css";
import { Container } from "./components/Container";
import { ToDoList } from "./pages/Tasks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./pages/Login";
import { Register } from "./pages/Register";
import { NotFound } from "./pages/NotFound";
import Home from "./pages/Home";
import Drawer from "./components/Drawer";
import LoginMUI from "./pages/LoginMUI";

function App() {
  let todos = [
    { id: 1, name: "Read book", checked: false },
    { id: 2, name: "Write letter", checked: false },
    { id: 3, name: "Edit cover", checked: false },
  ];

  return (
    <div className="app">
      <Container styles={{ margin: "2rem", textAlign: "center" }}>
        <Router>
          {/* <Header></Header> */}
          <Drawer></Drawer>
          <Routes>
            <Route
              path="/"
              element={<ToDoList tasks={todos}></ToDoList>}
            ></Route>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route
              path="/tasks"
              element={<ToDoList tasks={todos}></ToDoList>}
            ></Route>
            <Route path="/login" element={<LoginMUI></LoginMUI>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </Router>
      </Container>
    </div>
  );
}

export default App;
