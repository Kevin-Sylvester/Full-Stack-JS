import "./App.css";
import React from "react";
import { IoBeerOutline } from "react-icons/io5";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState("");
  const [todo, setTodo] = useState([]);
  const [edit, setEdit] = useState(false);

  const onAddTodo = () => {
    if (inputText) {
      setTodo([...todo, inputText]);
      setInputText("");
    }
  };

  const DeleteTodo = (uuidv4) => {
    let deleteTodo = [...todo];
    deleteTodo.splice(uuidv4, 1);
    setTodo(deleteTodo);
  };

  return (
    <div className="App">
      <div className="main-container">
        <h1>
          Whats Up Kevin! <IoBeerOutline />
        </h1>
        <div className="line"></div>
        <div className="flex">
          <input
            type="text"
            name="Add Task"
            id="textField"
            value={inputText}
            placeholder="Up with new task?"
            onChange={(e) => setInputText(e.target.value)}
          />
          <AiOutlinePlusCircle id="plusBtn" onClick={onAddTodo} />
        </div>

        <div className="line"></div>
        <h1>
          My Tasks
          {todo[0] && !edit ? (
            <i className="fa-solid fa-pen" onClick={() => setEdit(true)}></i>
          ) : (
            ""
          )}
          {todo && edit ? (
            <i className="fa-solid fa-check" onClick={() => setEdit(false)}></i>
          ) : (
            ""
          )}
        </h1>

        <div className="taskLists">
          {todo[0] ?
          todo.map((t, id) => (
            <>
              <div className="tasksList" key={t} contentEditable={edit}>
                {t}
              </div>
              <i
                className="fa-solid fa-trash"
                key={id}
                onClick={DeleteTodo}
              ></i>
            </>
          )) : 
          <h4>No Tasks <i class="fa-regular fa-face-grin-wink"></i></h4>
          }
        </div>
      </div>
    </div>
  );
}

export default App;
