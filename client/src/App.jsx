import { useState, useEffect } from 'react';
import './App.scss';
import Todo from './components/Task/Task';
import { useDispatch } from "react-redux";
import { addTaskAsync } from "./redux/tasksSlice";

function App() {

  const [task, setTask] = useState('')
  const [category, setCategory] = useState('foundation')
  const dispatch = useDispatch();

	const addTask = (e) => {
		e.preventDefault();
			dispatch(
				addTaskAsync({
					task: task,
          category: category
				})
			)
      console.log('lol');
      setTask('')
	}

  return (
    <div className="App">
      <h1>Startup Progress</h1>
      <form onSubmit={addTask} className='form' >
        <div className="input__form">
          <input value={task} required onChange={e => setTask(e.target.value)} type="text" />
          <select onChange={e => setCategory(e.target.value)} >
            <option value="foundation">foundation</option>
            <option value="discovery">discovery</option>
            <option value="delivery">delivery</option>
          </select>
        </div>
        <button type='submit'>Add</button>
      </form>
      <Todo/>
      <h6>© Omair Salam 2022</h6>
    </div>
  );
}

export default App;
