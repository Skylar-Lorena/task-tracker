import React, { useState } from 'react'
import{useParams, useNavigate} from "react-router-dom"

const EditTaskPage = () => {
    const{taskId} = useParams();
    const navigate = useNavigate();
    const [task, setTask]= useState({id:taskId,title:"Sample Task", description:"Edit this task", status: "Pending"});

      const handleChange = (e) => {
          const{name, value}= e.target;
          setTask({...task,[name]: value})
      };

      const handleSubmit= (e)=>{
        e.preventDefault();
         //to:do simulate saving with local storage/API
        console.log("Task updated:", task);
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
        <button type="submit">Save Changes</button>
    </form>
  )
}

export default EditTaskPage
