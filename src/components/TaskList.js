import React from 'react'

const TaskList = (tasks, onDelete) => {
    if(!Array.isArray(tasks)){
        return <p>No Tasks to Display</p>
    }
  return (
    <div>
        <ul>
            {tasks.map((task)=>(
                <li key={task.id}>
                    <h3>{task.title}</h3>
                    <p>{task.description}</p>
                    <p>{task.status}</p>
                    <button onClick={()=>onDelete(task.id)}>Delete</button>
                </li>
            ))}
        </ul>
      
    </div>
  )
}

export default TaskList
