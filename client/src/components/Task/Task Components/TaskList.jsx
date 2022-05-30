import React from 'react'
import TaskItem from './TaskItem'

const TaskList = ({tasks, onDone}) => {

  return (
    <div className='tasklist'>
      {tasks.map(task => {
        return <TaskItem  onDone={onDone} key={task._id} task={task.task} completed={task.completed} id={task._id} />
      })}
    </div>
  )
}

export default TaskList