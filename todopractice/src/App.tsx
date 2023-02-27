import TodoList from "./components/TodoList";  
import TodoInput from "./components/TodoInput"; 
// import TodoItem from "./components/TodoItem"
import './App.css';
import * as React from "react";   
// import {Todo}  from "./store/todoStore"; 

function App() {
  return(
    <div className="App">
      <TodoInput/>  
      <TodoList/>       
    </div>
  );
}  

export default App;


