import React, { useState } from 'react'

const EditTodoForm = ({editTodo,task}) => {
    
    const [tempInput,settempInput]=useState(task.task);
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        editTodo(tempInput,task.id);
        settempInput("");
    }
  return (
    <form className='Todoupdate' onSubmit={handleSubmit}>
        <input type="text" className='todo-update' placeholder='update Task' value={tempInput} onChange={(e)=>settempInput(e.target.value)}/>
        <button type='submit' className='todo-btn'>Update Task</button>
    </form>
  )
}

export default EditTodoForm;