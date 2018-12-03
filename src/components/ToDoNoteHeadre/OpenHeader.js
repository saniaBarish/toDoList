import React from "react"

const OpenHeader = ({listId, listName, editList, changeState}) => {
    return(
        <div id={"openHeader"} className="openHeader">
            <input 
                defaultValue={listName} 
                className="inputHeader" 
                onChange={(e)=>listName = e.currentTarget.value}
                onKeyDown = {e => 
                    {if (e.keyCode === 13){
                        editList(listId, listName);
                        changeState(listId);   
                    }
                }}>
            </input>
            <button className="buttonHeader" onClick={() => {
                editList(listId, listName);
                changeState(listId);
                }}>
                &#10004;
            </button>
        </div>
    )
}

export default OpenHeader