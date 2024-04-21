import React from 'react'
import TodoForm from './TodoForm'
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import Todo from './Todo'
import EditTodoForm from './EditTodoForm';
uuidv4();
const TodoWrapper = () => {
    const [inputs,setinput]=useState([]);
    const addTodo=(todo)=>{
        setinput([...inputs,{id:uuidv4(),task:todo,complete:false,isEditing:false}]);
    }
    const toggleComplete=(id)=>{
        setinput(inputs.map((todo)=>todo.id===id?{...todo,complete:!todo.complete}:todo))

    }
    const deleteTodo=(id)=>{
        setinput(inputs.filter((todo)=>todo.id!==id))
    }
    const editTodo=(id)=>{
        setinput(inputs.map((todo)=>todo.id===id?{...todo,isEditing:!todo.isEditing}:todo))
    }
    const editTask = (task, id) => {
        setinput(
          inputs.map((todo) =>
            todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo
          )
        );
      };
      console.log(inputs)
  return (
    <div className='TodoWrapper'>
        <h1>TASK MANAGER</h1>
        <TodoForm addTodo={addTodo}/>
        {
            inputs.map((todo,index)=>
                todo.isEditing ?(<EditTodoForm editTodo={editTask} task={todo}/>):(
                    <Todo 
                    task={todo} 
                    key={index}
                    toggleComplete={toggleComplete} 
                    deleteTodo={deleteTodo} 
                    editTodo={editTodo}
                    />
                )
            )
        }
    </div>
  )
}

export default TodoWrapper