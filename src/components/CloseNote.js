import React from "react";


const CloseNote = ({noteId, noteDiscription, onChangeStateNote, deleteNote}) => {
    return(
        <div id={"closeList"} className="closeList">
            <div id={"closeListNote"} className="closeList note">
                {noteDiscription}
            </div>
            <a className="hand" href="public/index.html" 
                onClick={(e) => e.preventDefault()}>
                <div
                    className="hand edit" 
                    onClick = {() =>{
                        onChangeStateNote(noteId);
                    }}>
                </div>
            </a>
            <a className="hand" href="public/index.html" 
                onClick={(e) => e.preventDefault()}>
                <div
                    className="hand delete" 
                    onClick = {() => deleteNote(noteId)}>
                </div>
            </a>
        </div>
    )
}

export default CloseNote;