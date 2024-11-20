import React, { useState, useCallback } from "react";
import Button from "../components/Button";
import Input from "../components/Input";
import TodoContainer from "../components/TodoContainer";
import { useDispatch } from "react-redux";
import { addTodo } from "../features/todos/todoSlice";

const index = () => {
  const [inputValue, setInputValue] = useState("");
  const dispatch = useDispatch()
  const addTodoHandler = useCallback(() => {
    if (inputValue.trim()) {
      console.log("Todo added:", inputValue);
      dispatch(addTodo(inputValue));
      setInputValue(""); // Clear the input field after adding a todo
    }
  }, [inputValue, dispatch]);
  return (
    <div className="flex flex-col justify-center items-center">
      <div>
        <h1 className="text-3xl font-semibold text-center mb-5">
          TODO APPLICATION
        </h1>
      </div>
      <div className="flex justify-center items-center">
        <Input value={inputValue} onInputChange={setInputValue} />
        <Button
          text="Add Todo"
          onClick={addTodoHandler}
          className={"border border-1 px-5 py-1 rounded bg-slate-500"}
        />
      </div>
      <TodoContainer />
    </div>
  );
};

export default index;
