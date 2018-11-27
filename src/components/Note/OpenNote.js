import React from "react";
const listsElement = (lists) =>  lists.map(list => {
        return (
            <option 
                key = {list.id} 
                id = {list.id + "option"} 
                value ={list.id}
                >
                {list.name}
            </option>
        )
        
    }
) 

const OpenNote = ({note, changeState, lists, editNote, transferNote}) => {

    return(
       <div className="openList">
            <input
                id = {note.id} 
                type="text" 
                defaultValue={note.discription} 
                onKeyDown={(event) =>{
                    if (event.keyCode === 27){
                        changeState()
                    }
                    else if(event.keyCode === 13){
                        editNote(note.id, document.getElementById(note.id).value);
                        changeState();
                    }
                }}>
            </input>
            <div className="openList select">
                <select id = {note.id + "select"} defaultValue = {note.listId}> 
                    <option disabled>---select list---</option>
                    {listsElement(lists,note)}
                </select>
                <button onClick={()=>{
                        transferNote(note.id, document.getElementById(note.id + "select").value)
                        editNote(note.id, document.getElementById(note.id).value);
                        changeState();
                    }}>
                    Done
                </button>
            </div>
        </div>  
    )
}

export default OpenNote;