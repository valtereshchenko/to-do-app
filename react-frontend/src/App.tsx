import React from 'react';
import './App.css';
import { Container } from './components/Container';
import { ToDoList } from './components/Tasks';


function App() {


    let todos= [
      { id: 1, name: "Read book", checked: false },
      { id: 2, name: "Write letter", checked: false },
      { id: 3, name: "Edit cover", checked: false }
    ]


  return (
    <Container styles={{margin: "2rem" , textAlign: "center"}}>
    <ToDoList tasks={todos}></ToDoList>
    
    </Container>
  );
}

export default App;
