import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from './tasksSlice'
import buttonReducer from "./buttonSlice";


export default configureStore({
  reducer: {
    tasks: tasksReducer,
    button: buttonReducer
  }
});