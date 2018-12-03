import React from "react"
import OpenHeader from "./OpenHeader"
import CloseHeader from "./CloseHeader"


const ToDoNoteHeader = ({listId, listName, isOpen, onEditList, onChangeStateList, onDeleteList, list}) => {
    return(
        <div>
            <a className="hand" href="public/index.html" onClick={(e) => e.preventDefault()}>
                <div id="penId" className="hand editList" onClick={()=> {
                    onChangeStateList(listId)}}></div>
            </a>
            <a className="hand" href="public/index.html" onClick={(e) => e.preventDefault()}>
                <div id={"deleteList"} className="hand deleteList" onClick={()=>{onDeleteList(listId)}}></div>
            </a>
            {isOpen ? 
            <OpenHeader listId={listId} listName={listName} editList={onEditList} changeState={onChangeStateList}/> : 
            <CloseHeader listName={listName} list={list}/>}
        </div>
    )
}

export default ToDoNoteHeader