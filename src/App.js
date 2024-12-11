import React from 'react'
import HomePage from './pages/HomePage'
import AddTaskPage from './pages/AddTaskPage'
import EditTaskPage from './pages/EditTaskPage'
import NotFoundPage from './pages/NotFoundPage'
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/add-task" element={<AddTaskPage/>}/>
        <Route path="/edit-task/:taskId" element={<EditTaskPage/>}/>
        <Route path="*" element={<NotFoundPage/>}/>
      </Routes>  
    </Router>
  )
}

export default App
