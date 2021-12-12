import React, { createContext, useEffect, useReducer } from "react";
import { todoReducer } from "../reducers/TodoReducer";
import { GET_TODOS, SAVE_TODO } from "../reducers/types";

export const TodoContext = createContext();

const TodoContextProvider = ({ children }) => {
  // State
  // const [todos, setTodos] = useState([]);
  const [todos, dispatch] = useReducer(todoReducer, []);

  // useEffect
  useEffect(() => {
    dispatch({
      type: GET_TODOS,
      payload: null,
    });

    // console.log("getting todos");
    // const todos = localStorage.getItem("todos");
    // if (todos) setTodos(JSON.parse(todos));
  }, []);

  // useEffect(() => {
  //   console.log("Saving todos");
  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }, [todos]);

  useEffect(() => {
    dispatch({
      type: SAVE_TODO,
      payload: { todos },
    });
  }, [todos]);

  // const addTodo = (todo) => {
  //   setTodos([...todos, todo]);
  // };

  // const deleteTodo = (id) => {
  //   const newsTodo = todos.filter((todo) => todo.id !== id);
  //   setTodos(newsTodo);
  // };

  const todoContextData = {
    todos,
    // addTodo,
    // deleteTodo,
    dispatch,
  };

  return (
    <TodoContext.Provider value={todoContextData}>
      {children}
    </TodoContext.Provider>
  );
};

export default TodoContextProvider;
