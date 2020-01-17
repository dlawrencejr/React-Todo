import React from 'react'

const TodoForm = props =>{

    return (
        <form onSubmit = {props.handleSubmit}>
            <input
            type='text'
            name='task'
            value={props.text}
            onChange={props.handleChange}/>
            <button className='add-button'>Add Todo</button>
        </form>
    );
}
export default TodoForm;