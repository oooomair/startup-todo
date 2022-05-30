import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getTasksAsync = createAsyncThunk(
  'task/getTasksAsync',
  async () => {
    const res = await fetch('http://localhost:5000/tasks')
    if (res.ok) {
      const tasks = await res.json()
      return {tasks}
    } else {
      console.log('error');
    }
  }
  )

  export const addTaskAsync = createAsyncThunk(
    'task/addTaskAsync',
    async payload => {
      const res = await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ task: payload.task, category: payload.category }),
      });
  
      if (res.ok) {
        const task = await res.json();
        return { task };
      }
    }
  )

  export const deleteTaskAsync = createAsyncThunk(
    'task/deleteTaskAsync',
    async (payload) => {
      const res = await fetch(`http://localhost:5000/tasks/${payload.id}`, {
        method: 'DELETE',
      });
  
      if (res.ok) {
        return { id: payload.id }
      }
    }
  );

  export const updateTaskAsync = createAsyncThunk(
    'task/updateTaskAsync',
    async (payload) => {
      const res = await fetch(`http://localhost:5000/tasks/${payload.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ completed: !payload.completed }),
      });
  
      if (res.ok) {
        const task = await res.json();
        return { task };
      }
    }
  )


export const tasksSlice = createSlice({
  name: "tasks",
  initialState: [],
  reducers: {
    addTasks: (state, { payload }) => { 
      state.tasks = payload 
    }
  },
  extraReducers: {
		[getTasksAsync.fulfilled]: (state, action) => {
			return action.payload.tasks;
		},
    [addTaskAsync.fulfilled]: (state, action) => {
			state.push(action.payload.task);
		},
    [deleteTaskAsync.fulfilled]: (state, action) => {
			return state.filter((task) =>  task._id !== action.payload.id)
		},
    [updateTaskAsync.fulfilled]: (state, action) => {
			const index = state.findIndex(
				(task) => {
          return task._id === action.payload.task._id
        }
			);
			state[index].completed = action.payload.task.completed;
		}
  }
})

export default tasksSlice.reducer;