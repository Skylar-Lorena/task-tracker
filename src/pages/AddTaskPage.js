import React from 'react'
import { useState } from 'react'
import {useNavigate} from "react-router-dom"

function AddTaskPage (){
    const[task, setTask]= useState({title:"", description:"", status: "Pending"})
    const navigate = useNavigate();
    const handleChange = (e) => {
        const {name, value} = e.target;
        setTask({...task, [name]: value});
    };

    const handleSubmit= (e)=>{
        e.preventDefault();
        //to:do simulate saving with local storage/API
        console.log("Task added:", task);
        navigate("/");
    }

  return (
    <form onSubmit={handleSubmit}>
        <h2>Add New Task</h2>
        <label>
            Title: 
            <input type="text" name="title" value={task.title} onChange={handleChange}/>
        </label>
        <label>
            Description:
            <input type="text" name="description" value={task.description} onChange={handleChange}/>
        </label>
        <label>
            Status:
            <select name="status" value={task.status} onChange={handleChange}>
                <option value="Pending">Pending</option>
                <option value="In Progress">In Progress</option>
                <option value="Completed">Completed</option>
            </select>
        </label>
      <button type="submit">Add Task</button>
    </form>
  )
}

export default AddTaskPage
