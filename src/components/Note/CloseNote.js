import React from "react";


const CloseNote = ({note, changeState, deleteNote}) => {
    return(
        <div className="closeList">
            <div className="closeList note">
                {note.discription}
            </div>
            <a className="hand" href="public/index.html" 
                onClick={(e) => e.preventDefault()}>
                <div
                    className="hand edit" 
                    onClick = {() =>{
                        changeState();
                    }}>
                </div>
            </a>
            <a className="hand" href="public/index.html" 
                onClick={(e) => e.preventDefault()}>
                <div
                    className="hand delete" 
                    onClick = {() => deleteNote(note.id)}>
                </div>
            </a>
        </div>
    )
}

export default CloseNote;