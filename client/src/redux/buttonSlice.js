import { createSlice } from "@reduxjs/toolkit";

export const buttonSlice = createSlice({
  name: "button",
  initialState: {
    deleteItem: false
  },
  reducers: {
    onDelete: (state, { payload }) => { state.deleteItem = payload }
  }
});

export const { onDelete } = buttonSlice.actions;

export default buttonSlice.reducer;