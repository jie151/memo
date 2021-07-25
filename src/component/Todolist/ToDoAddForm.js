import React, {useState} from 'react';
import {v4} from 'uuid';

export default function ToDoAddForm ({add}) {
    const [note, setNote] = useState("")

    function noteChange (e) {
        setNote(e.target.value)
    }
    function notes(){
        add(function(prevData){
            return [
            {
                id:v4(),
                note
            },...prevData,]
        })
        setNote("")
    }
    return (
        <div>
                <input type="text"  
                    id="input-addTodo" 
                    placeholder="Add a Todo"
                    value={note} 
                    onChange={noteChange}
                />
                <button onClick={notes}>ADD</button>
            
        </div>
        
    );
}
//<button type="submit" onSubmit={noteSubmit}>ADD</button>