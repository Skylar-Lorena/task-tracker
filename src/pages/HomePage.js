import React from 'react'
import { useState } from 'react';
import TaskList from '../components/TaskList';
import { Link } from 'react-router-dom';
const HomePage = () => {
    const [tasks,setTasks]= useState([
        {id:1, title: "Learn React", description: "Understand React Components", status: "In Progress"},
        {id:2, title: "Learn React Native", description: "Understand Android Development", status: "Pending"},

    ]);

    const deleteTask = (id)=>{
        setTasks(tasks.filter((task)=> task.id !== id));
    }
  return (
    <div>
      <h1>Task Tracker</h1>
      <Link to="/add-task">Add Task</Link>
      <TaskList tasks={tasks} onDelete={deleteTask}/>
    </div>
  )
}

export default HomePage

//manage our tasks as an array of objects
//id, title,description
//crud -delete a task, create a  task, update a task, read a task