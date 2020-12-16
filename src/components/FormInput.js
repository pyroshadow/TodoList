import React, {useState, useContext, useRef, useEffect} from 'react'
import {DataContext} from "./DataProvider"

export default function FormInput() {
    const [todos, setTodos] = useContext(DataContext);
    const [todoName, setTodoName] = useState('');
    const todoInput = useRef();


    const addTodo = e => {
        e.preventDefault();
        setTodos([...todos,{name: todoName, complete:false}])
        setTodoName('');
    }

    useEffect(()=>{
        todoInput.current.focus();
    },[])
    return (
        <div>
            <form autoComplete="off" onSubmit={addTodo}>
                <input type="text" name="todos" id="todos" ref={todoInput}
                placeholder="What is your task?" value={todoName} onChange={e => setTodoName(e.target.value.toLowerCase())}/>
                <button type="submit">Add</button>
            </form>
        </div>
    )
}
