import React from "react";
const listsElement = (lists, note) =>  lists.map(list => {
    console.log(list.id);
        if (list.id === note.listId){
            return (
                <option 
                    key = {list.id} 
                    id = {list.id + "option"} 
                    value ={ list.id}
                    // selected = {list.name}
                    >
                    {list.name}
                </option>
            )
        }
        else {
            return (
                <option 
                    key = {list.id} 
                    id = {list.id + "option"} 
                    value ={ list.id}
                    // selected = {list.id.toString()}
                    >
                    {list.name}
                </option>
            )
        }
        
    }
) 

const OpenNote = ({note, changeState, lists, editNote, transferNote}) => {
    return(
       <div>
            <input
                id = {note.id} 
                className=" col-sm-10" 
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
                }}
                style={{width: "130px"}}
            >
            </input>
            <button 
                className=" btn-sm bg-success"
                onClick = {() => {
                    editNote(note.id, document.getElementById(note.id).value);
                    changeState();
                }}        
            >
                <big className="card-header-pills" >&#10003;</big>
            </button>
            <button 
                className="hand remove remove-list" style={{width:"20px", height: "20px"} }
                onClick = {changeState}
            >
                {/* <big className="card-header-pills" >X</big> */}
            </button>
            <div>
                <select className="select-list" id = {note.id + "select"}> 
                    <option disabled>---select list---</option>
                    {listsElement(lists,note)}
                </select>
                <button onClick={()=>{
                    // console.log(document.getElementById(note.id + "select").value)
                    transferNote(note.id, document.getElementById(note.id + "select").value)
                    }}>
                    Done
                </button>
            </div>
        </div>  
    )
}

export default OpenNote;