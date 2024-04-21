import React, { useState } from 'react'

const TodoForm = ({addTodo}) => {
    
    const [tempInput,settempInput]=useState("");
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(tempInput===""){
            return;
        }
        addTodo(tempInput);
        settempInput("");
    }
    
  return (
    <form className='TodoForm' onSubmit={handleSubmit}>
        <input type="text" className='todo-input' placeholder='what is the tesk' value={tempInput} onChange={(e)=>settempInput(e.target.value)}/>
        <button type='submit' className='todo-btn'>Add</button>
        <div className='ouptut'>
        <div className='listOption'>
        {/* {inputs.map((input, index) => (
            <div key={index}>
            <li>{input}</li>
            <button onClick={() => deleteTask(index)}>Delete Task</button>
        </div>
        ))} */}
    </div>
        </div>
    </form>
  )
}

export default TodoForm;