import React from "react";


const CloseNote = ({note, changeState, deleteNote}) => {
    return(
        <div>
            <div type ="text">
                {note.discription}
            </div>
            <div>
                <button 
                    className="bg-primary btn-sm"
                    onClick = {() =>{
                        changeState();
                    }}
                >
                    <div>Edit</div>
                </button>
                <button 
                    className=" bg-danger btn-sm"
                    onClick = {() =>deleteNote(note.id)}
                >
                    Delete
                </button>
            </div>
        </div>
    )
}

export default CloseNote;