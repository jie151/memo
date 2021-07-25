import React from 'react';
import Item from './ToDoItem';

export default function ToDoList ({todo,deleteData,editData}) {
    
    console.log("todolist",todo.note);
    return (
        
        <Item key={todo.id} note={todo} deleteData={deleteData} editData={editData}/>
    );
}