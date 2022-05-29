import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({tasks}) => {

  return (
    <div className='tasklist'>
      {tasks.map(task => {
        return <TaskItem key={task._id} task={task.task} completed={task.completed} id={task._id} />
      })}
    </div>
  )
}

export default TaskList