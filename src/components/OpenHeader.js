import React from "react"

const OpenHeader = ({listId, listName, editList, changeState}) => {
    var inputValue = listName;
    return(
        <div className="openHeader">
            <input 
                defaultValue={listName} 
                className="inputHeader" 
                onKeyDown={(e)=>{
                    inputValue = e.currentTarget.value;
                    if (e.keyCode === 13){
                        editList(listId, inputValue);
                        changeState();   
                    }
                }}>
            </input>
            <button className="buttonHeader" onClick={() => {
                editList(listId,inputValue);
                changeState();
                }}>
                &#10004;
            </button>
        </div>
    )
}

export default OpenHeader