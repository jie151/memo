import React,{useState} from 'react';
import './ToDoApp.css';
import ToDoAddForm from './ToDoAddForm';
import ToDoList from './ToDoList';


export default function ToDoApp () {
    const [todo, setTodo] = useState([]);

    

    function removeTodo(e) {
        e.preventDefault();
    }
    

    return (
        <div>
            <h1>Todo list</h1>
            <ToDoAddForm add={setTodo}/>
            {
                todo.map((todo)=>(
                    <ToDoList 
                        onSubmit={removeTodo}
                        todo={todo}
                        deleteData={setTodo}
                        editData={setTodo}
                    />
                ))
            }
            
            
            
        </div>
    );
}
