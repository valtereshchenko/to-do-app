import React from "react";
import "./App.css";
import { Container } from "./components/Container";
import { ToDoList } from "./components/Tasks";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Login from "./components/Login";
import { Register } from "./components/Register";
import { NotFound } from "./components/NotFound";
import { Home } from "./components/Home";
import Drawer from "./components/Drawer";

function App() {
  let todos = [
    { id: 1, name: "Read book", checked: false },
    { id: 2, name: "Write letter", checked: false },
    { id: 3, name: "Edit cover", checked: false },
  ];

  return (
    <div className="app">
      <Router>
        <Header></Header>
        {/* <Drawer></Drawer> */}
        <Container styles={{ margin: "2rem", textAlign: "center" }}>
          {/* <ToDoList tasks={todos}></ToDoList> */}
          <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route
              path="/"
              element={<ToDoList tasks={todos}></ToDoList>}
            ></Route>
            <Route
              path="/tasks"
              element={<ToDoList tasks={todos}></ToDoList>}
            ></Route>
            <Route path="/login" element={<Login></Login>}></Route>
            <Route path="/register" element={<Register></Register>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </Container>
      </Router>
    </div>
  );
}

export default App;
