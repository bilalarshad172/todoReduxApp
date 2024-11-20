import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  mytodos: [{ id: nanoid(), title: "Learn Redux" }],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: nanoid(),
        title: action.payload,
      };
      state.mytodos.push(todo);
    },
    removeTodo: (state, action) => {
      state.mytodos = state.mytodos.filter(
        (todo) => todo.id !== action.payload
      );
    },
    editTodo: (state, action) => {
      const { id, newTitle } = action.payload;
      const todo = state.mytodos.find((todo) => todo.id === id);
      if (todo) {
        todo.title = newTitle; // Update the todo's title
      }
    },
    toggleCompleted: (state, action) => {
      const todo = state.mytodos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed; // Toggle the completed status
      }
    },
  },
});

export const { addTodo, removeTodo, editTodo, toggleCompleted } = todoSlice.actions;

export default todoSlice.reducer;
