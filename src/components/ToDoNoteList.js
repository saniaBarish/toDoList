import React, {Component} from "react";
import Note from "./Note"


class ToDoNoteList extends Component {

    
    

    render(){
        
        const {list, notes, addNote, lists, editNote, deleteNote, deleteList, transferNote} = this.props;
        const elemenstNote = () => {
            return(
                notes.map(note => {
                    return (
                        <section key = {note.id} className="card"> 
                            <Note 
                                note={note} 
                                lists={lists} 
                                editNote={editNote} 
                                deleteNote={deleteNote}
                                transferNote= {transferNote}/> 
                        </section>
                    )
                })
            )
        }
        return(
            
                <section >
                    <h1>
                        {list.name}
                    </h1>
                    {/* <a className="hand" href="public/index.html">
                        <div className="remove remove-list"></div>
                    </a> */}
                    <button 
                        className="hand remove remove-list" style={{width:"20px", height: "20px"} }
                        onClick={()=>{deleteList(list.id)}}
                        >
                    </button>
                    <section>
                        {elemenstNote()}
                    </section>
                    <input 
                        
                        id = {list.id}
                        onKeyDown = {(event) =>{
                            if (event.keyCode === 13){
                                addNote(list.id, document.getElementById(list.id).value);
                                document.getElementById(list.id).value = "";
                            }
                        }}
                    ></input>
                </section>
            
        )
    }

    
}

export default ToDoNoteList;