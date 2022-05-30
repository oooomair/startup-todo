import {useEffect, useState} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { updateTaskAsync, deleteTaskAsync } from '../../../redux/tasksSlice';
import {FiMinus} from 'react-icons/fi'

const TaskItem = ({ task, id, completed }) => {

  const deleteItem = useSelector((state) => state.button.deleteItem)

  const dispatch = useDispatch();

  const deleteTask = () => {
		dispatch(deleteTaskAsync({ id }));
	};


	const updateTask = () => {
		dispatch(updateTaskAsync({ id, completed }))
	};

  return (
    <div onClick={!deleteItem ? updateTask : null} className={`${completed && 'taskitem__done'} taskitem`}>
      {deleteItem ? <div onClick={deleteTask} style={{backgroundColor: '#EB5E5E'}} className="taskitem__circle"><FiMinus/></div> : <div className="taskitem__circle"></div>}
      <span >{task}</span>
    </div>
  )
}

export default TaskItem