import React, {useState} from "react";

const Item = ({note, deleteData, editData}) => {
    const [editNote, setEditNote] = useState("");
    function delItem() {
        console.log('delete', note.id);
        deleteData(function(prev){
            return prev.filter(item => item.id !== note.id)  //不等於得會被留下
        })
    }

    return (
        <div>
            <input value={note.note}  />
            <button className="remove" onClick={delItem}>remove</button>
        </div>
    );
}

export default Item;