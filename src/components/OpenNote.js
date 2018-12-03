import React from "react";
import ListElements from "./ListElements"

const OpenNote = ({lists, noteId, noteDiscription, noteListId, editNote, transferNote,  selectValue, inputValue, 
changeSelectValue, changeInputValue,onChangeStateNote}) => {
    return(
        <div id={"openList"} className="openList">
            <input
                id={"openListInput"}
                type="text" 
                defaultValue={noteDiscription}
                onChange={(e) => {changeInputValue(e.currentTarget.value)}}
                onKeyDown = {(e) => {
                    if (e.keyCode === 27){
                        onChangeStateNote(noteId)
                    }
                    else if(e.keyCode === 13){
                        editNote(noteId, inputValue);
                        onChangeStateNote(noteId);
                    }
                }}
                >
            </input>
            <div id ={"openListSelect"} className="openList select">
                <select  defaultValue = {noteListId} onChange={(e) => {
                        changeSelectValue(e.currentTarget.value)
                    }}> 
                    <option disabled>---select list---</option>
                    <ListElements lists = {lists}/>
                </select>
                <button onClick={()=>{
                        transferNote(noteId, selectValue)
                        editNote(noteId, inputValue);
                        onChangeStateNote(noteId);
                    }}>
                    Done
                </button>
            </div>
        </div>  
    )
}

export default OpenNote;