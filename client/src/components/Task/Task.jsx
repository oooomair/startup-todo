import './task.scss'
import {BiTrash} from 'react-icons/bi'
import TaskList from './Task Components/TaskList'
import { useDispatch, useSelector } from "react-redux";
import { getTasksAsync } from "../../redux/tasksSlice";
import { useEffect, useState } from 'react'
import { onDelete } from '../../redux/buttonSlice'

const Task = () => {

  const dispatch = useDispatch();

  const deleteItem = useSelector((state) => state.button.deleteItem)
  const tasks = useSelector((state) => state.tasks)
  const [isFoundationTasksComplete, setIsFoundationTasksComplete] = useState(false)

  const foundationTasks = tasks.filter(task => task.category === 'foundation')
  const discoveryTasks = tasks.filter(task => task.category === 'discovery')
  const deliveryTasks = tasks.filter(task => task.category === 'delivery')

  const FoundationTasksLeft = foundationTasks.filter(task => task.completed === false)

  console.log(FoundationTasksLeft.length);

  useEffect(() => {
    dispatch(getTasksAsync())
  }, [dispatch])

  return (
    <div className='task'>
        <div className='task__buttons'>
        <div onClick={() => dispatch(onDelete(!deleteItem))} className="task__delete">{deleteItem ? 'Done' :<BiTrash size={23} />}</div>
        </div>
          <div className="task__phase">
            <h3>Foundation</h3>
            {foundationTasks && <TaskList tasks={foundationTasks} />}
          </div>
          <div className="task__phase">
            <h3>Discovery</h3>
            {discoveryTasks && <TaskList tasks={discoveryTasks} />}
          </div>
          <div className="task__phase">
            <h3>Delivery</h3>
            {deliveryTasks && <TaskList tasks={deliveryTasks} />}
          </div>
    </div>
  )
}

export default Task