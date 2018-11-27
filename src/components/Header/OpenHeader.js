import React from "react"

const Header = ({listId, listName, editList, changeState}) => {
    return(
        <div className="openHeader">
            <input 
                id={"inputHeader" + listId}
                defaultValue={listName} 
                className="inputHeader" 
                onKeyDown={(e)=>{
                    if (e.keyCode === 13){
                        editList(listId,document.getElementById("inputHeader" + listId).value);
                        changeState();
                    }
                }}>
            </input>
            <button className="buttonHeader" onClick={() => {
                editList(listId,document.getElementById("inputHeader" + listId).value);
                changeState();}}>
                &#10004;
            </button>
        </div>
    )
}

export default Header