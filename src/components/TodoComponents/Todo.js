import React from 'react'
import './Todo.css'

const Todo = props =>{
    let className = 'task';
    const handleCompletedToggle = () =>{
        props.completedToggle(props.item);
    }
    if(props.item.completed){
        className += 'completed-task'
    }

    return(
        <div>
            <p className ={className} onClick ={handleCompletedToggle}>{props.item.task}</p>
        </div>
    );
};

export default Todo;