//import './App.css';
import React from "react";
import { TodoProvider } from "../TodoContext";
import { AppUI } from "./AppUI";

/*
const defaultTodos = [
  { text: "Cortar cebolla", completed: true },
  { text: "Tomar el curso de intro de react", completed: false },
  { text: "Llorar con la llorona", completed: true },
  { text: "AAAA", completed: false },
];
*/

function App() {
  return [
    <TodoProvider>
      <AppUI />
    </TodoProvider>,
  ];
}

export default App;
