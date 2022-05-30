import './task.scss'
import {BiTrash} from 'react-icons/bi'
import TaskList from './Task Components/TaskList'
import { useDispatch, useSelector } from "react-redux";
import { getTasksAsync } from "../../redux/tasksSlice";
import { useEffect, useState } from 'react'
import { onDelete } from '../../redux/buttonSlice'
import Swal from 'sweetalert2'

const Task = () => {

  const dispatch = useDispatch();

  const deleteItem = useSelector((state) => state.button.deleteItem)
  const tasks = useSelector((state) => state.tasks)

  const foundationTasks = tasks.filter(task => task.category === 'foundation')
  const discoveryTasks = tasks.filter(task => task.category === 'discovery')
  const deliveryTasks = tasks.filter(task => task.category === 'delivery')

  const foundationTasksCompleted = foundationTasks.filter(task => task.completed === true)
  const discoveryTasksCompleted = discoveryTasks.filter(task => task.completed === true)
  const deliveryTasksCompleted = deliveryTasks.filter(task => task.completed === true)

  const isFoundationDone = foundationTasksCompleted.length === foundationTasks.length
  const isDiscoveryDone = discoveryTasksCompleted.length === discoveryTasks.length
  const isDeliveryDone = deliveryTasksCompleted.length === deliveryTasks.length

  // const allDone = isDeliveryDone && isDiscoveryDone && isFoundationDone

  const onDone = () => {
    // if (allDone) {
    //   Swal.fire({
    //     title: 'Lets Go',
    //     text: 'Your company is up and running',
    //     icon: 'success',
    //     confirmButtonColor: '#3085d6',
    //     confirmButtonText: 'Yay'
    //   })
    // }
  }

  useEffect(() => {
    dispatch(getTasksAsync())
  }, [dispatch])

  return (
    <div className='task'>
        <div className='task__buttons'>
        <div onClick={() => dispatch(onDelete(!deleteItem))} className="task__delete">{deleteItem ? 'Done' :<BiTrash size={23} />}</div>
        </div>
          <div className={`task__phase ${isFoundationDone && 'done'}`}>
            <h3>Foundation</h3>
            <TaskList onDone={onDone}  tasks={foundationTasks} />
          </div>
          <div className={`${isFoundationDone ? 'able' : 'not-able' } task__phase ${isDiscoveryDone && 'done'}`}>
            <h3>Discovery</h3>
            <TaskList onDone={onDone} tasks={discoveryTasks} />
          </div>
          <div className={`${isDiscoveryDone ? 'able' : 'not-able' } task__phase ${isDeliveryDone && 'done'}`}>
            <h3>Delivery</h3>
            <TaskList onDone={onDone} tasks={deliveryTasks} />
          </div>
    </div>
  )
}

export default Task