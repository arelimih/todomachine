import React from "react";
import { TodoContext } from "../TodoContext";
import "./TodoForm.css";

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const { addTodo, setOpenModal } = React.useContext(TodoContext);
  const onCancel = () => {
    //TODO
    setOpenModal(false);
  };

  const onSubmit = (event) => {
    //TODO
    //addTodo
    event.preventDefault();
    if (newTodoValue != "" && newTodoValue != undefined) {
      addTodo(newTodoValue);
      setOpenModal(false);
    }
    else
    {
      let element = document.getElementById('lblWarning');
      element.style.display= "block";

    }
  };

  const onChange = (event) => {
    let element = document.getElementById('lblWarning');
    element.style.display= "none";
    setNewTodoValue(event.target.value);
  };
  return (
    <form onSubmit={onSubmit}>
      <label>Escribe un nuevo TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Ingrese un Todo Nuevo"
      />
    
       <label id='lblWarning' className="label-warning">Favor de ingresar un TODO</label>
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          onClick={onCancel}
          className="TodoForm-button TodoForm-button--cancel"
        >
          Cancelar
        </button>

        <button type="submit" className="TodoForm-button TodoForm-button--add">
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
