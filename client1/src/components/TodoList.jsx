import React, { useEffect, useState } from "react";
import "../css/TodoList.css";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import { addTodoRoute, getTodoRoute } from "../utils/ApiRoutes";

export default function TodoList() {
  const [todo, setTodo] = useState(""); // State for input value
  const [storedTodo, setStoredTodo] = useState([]);

  const fetchTodos = async () => {
    const response = await axios.get(getTodoRoute);
    console.log(response.data);
    setStoredTodo(response.data);
  };

  useEffect(() => {

    fetchTodos(); // Call fetchTodos function on mount
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  const handleTodoAdd = async (event) => {
    const result = await axios.post(addTodoRoute, {
      todo,
    });

    if (result.data.success) {
      console.log("success");
      fetchTodos();
      setTodo("");
    } else {
      console.log("error");
    }
  };

  return (
    <div>
      <div className="component1">
        <div className="title">TodoList</div>
        <div className="component2">
          <div>
            <input
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
              className="inp"
              type="text"
              placeholder="Add a new todo"
            />
          </div>
          <div>
            <button onClick={handleTodoAdd} className="addBtn">
              Add
            </button>
          </div>
        </div>
        <div className="component3">
          {/* <div className="task">
            <div className="taskDo">
              <input type="radio" />
              <div>Hello</div>
            </div>
            <div>
              <MdDelete size={25} />
            </div>
          </div> */}
          {storedTodo.map((item) => (
            <div className="task">
              <div className="taskDo">
                <input type="radio" />
                <div>{item.todo}</div>
              </div>
              <div>
                <MdDelete size={25} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
