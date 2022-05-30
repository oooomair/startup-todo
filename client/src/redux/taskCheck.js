import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const tasksSlice = createSlice({
  name: "taskCheck",
  initialState: {
      foundationDone: false,
      discoveryDone: false,
      deliveryDone: false
  },
  reducers: {
    onFoundationFinish: (state, { payload }) => { state.foundationDone = payload },
    onDiscoveryFinish: (state, { payload }) => { state.onDiscoveryFinish = payload },
    onDeleveryFinish: (state, { payload }) => { state.onDeleveryFinish = payload }
  }
})

export const { onFoundationFinish, onDiscoveryFinish, onDeleveryFinish } = tasksSlice.actions;
export default tasksSlice.reducer;