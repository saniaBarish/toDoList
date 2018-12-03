import React from "react";

const AddNote = ({listId, inputValue, onAddNote, changeState}) => {
    return(
        <div id={"input"} className="card input">
            <a className="hand" href="public/index.html"
                onClick={(e) => {e.preventDefault()}}>
                <div className="hand addList"
                    onClick={() => {
                        onAddNote(listId, inputValue);
                        changeState("");
                        }
                    }>
                </div>
            </a>
            <input 
                value={inputValue}
                onChange = {(e) =>{
                    changeState(e.currentTarget.value)
                }} onKeyPress={(e) => {
                    if (e.charCode === 13){
                        onAddNote(listId, inputValue);
                        changeState("")
                    }
                }}>
            </input>
        </div>
    )
}

export default AddNote