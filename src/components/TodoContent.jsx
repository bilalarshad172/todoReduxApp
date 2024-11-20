import React,{useState} from "react";
import Button from "./Button";
import { FaPencilAlt, FaTrash, FaCheckCircle } from "react-icons/fa"; // FontAwesome icons
import { useSelector, useDispatch } from "react-redux";
import { removeTodo,editTodo, toggleCompleted } from "../features/todos/todoSlice";

const TodoContent = () => {
  const todos = useSelector((state) => state.todos.mytodos);
  const dispatch = useDispatch();

  const [editingTodo, setEditingTodo] = useState(null);  // State for tracking editing todo
  const [newTitle, setNewTitle] = useState(""); 

  const handleEditClick = (todo) => {
    setEditingTodo(todo);         // Set the todo to be edited
    setNewTitle(todo.title);      // Set the current title as the newTitle
  };

  const handleSaveClick = () => {
    if (editingTodo) {
      dispatch(editTodo({ id: editingTodo.id, newTitle }));
      setEditingTodo(null);  // Clear the editing state
      setNewTitle("");       // Reset the input field
    }
  };

  const handleToggleCompleted = (todoId) => {
    dispatch(toggleCompleted(todoId));  // Dispatch the toggle action
  };

  return (
    <>
      {todos?.length > 0 ? (
        todos.map((todo) => (
          <div
            key={todo.id}
            className={`border flex justify-between items-center px-4 mx-2 my-2 rounded shadow-md ${todo.completed ? 'bg-green-100' : 'bg-slate-400'}`}
          >
            {editingTodo && editingTodo.id === todo.id ? (
              <div className="flex gap-2 py-2">
                <input
                  type="text"
                  value={newTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                  className="border px-2 py-1 rounded"
                />
                <Button
                  text="Save"
                  onClick={handleSaveClick}
                  className="border border-1 p-1 py-1 rounded"
                />
                <Button
                  text="Cancel"
                  onClick={() => {
                    setEditingTodo(null); // Cancel editing
                    setNewTitle("");       // Reset the input field
                  }}
                  className="border border-1 p-1 py-1 rounded"
                />
              </div>
            ) : (
              <div className="flex justify-between items-center w-full">
                <p className={`${todo.completed ? 'line-through text-green-600' : ''}`} >{todo.title}</p>
                <div className="flex gap-2 py-2">
                  <Button
                      text={<FaCheckCircle />}
                      onClick={() => handleToggleCompleted(todo.id)}
                    className={`border border-1 p-1 py-1 rounded ${todo.completed ? 'text-green-600' : ''}`}
                  />
                  <Button
                    text={<FaPencilAlt />}
                    onClick={() => handleEditClick(todo)}  // Trigger edit mode
                    className={`border border-1 p-1 py-1 rounded ${todo.completed ? 'cursor-not-allowed opacity-50' : ''}`}
                  />
                  <Button
                    text={<FaTrash />}
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className={"border border-1 p-1 py-1 rounded"}
                  />
                </div>
              </div>
            )}
          </div>
        ))
      ) : (
        <p className="my-4 bg-slate-400 mx-4 py-1 rounded shadow-md">No todos available</p> // Optional fallback if no todos exist
      )}
    </>
  );
};

export default TodoContent;
