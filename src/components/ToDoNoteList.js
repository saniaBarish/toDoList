import React, {Component} from "react";
import Header from "./Header/"
import Note from "./Note"


class ToDoNoteList extends Component {

    state ={
        isOpen:false
    }

    changeState = () =>{
        this.setState({
            isOpen:!this.state.isOpen
        })
    }

    render(){
        const {list, notes, addNote, lists, editNote, deleteNote, deleteList, transferNote, editList} = this.props;
        const elemenstNote = () => {
            return(
                notes.map(note => {
                    return (
                        <section key = {note.id}> 
                            <Note 
                                note={note} 
                                lists={lists} 
                                editNote={editNote} 
                                deleteNote={deleteNote}
                                transferNote= {transferNote}
                            /> 
                        </section>
                    )
                })
            )
        }
        return(
            <section className="card">

                <h1>
                    <a className="hand" href="public/index.html" onClick={(e) => e.preventDefault()}>
                        <div id="penId" className="hand editList" onClick={()=> {this.changeState()}}></div>
                    </a>
                    <a className="hand" href="public/index.html" onClick={(e) => e.preventDefault()}>
                        <div className="hand deleteList" onClick={()=>deleteList(list.id)}></div>
                    </a>
                    <Header 
                        listId={list.id} 
                        listName={list.name} 
                        isOpen={this.state.isOpen}
                        editList={editList}
                        changeState={this.changeState}
                    />
                </h1>

                <div className="card body">
                    {elemenstNote()}
                </div>

                <div className="card input">
                    <a className="hand" href="public/index.html"
                        onClick={(e) => {e.preventDefault()}}>
                        <div className="hand addList"
                            onClick={() => {
                                addNote(list.id, document.getElementById(list.id).value);
                                document.getElementById(list.id).value = "";}
                            }>
                        </div>
                    </a>
                    <input 
                        id = {list.id}
                        onKeyDown = {(event) =>{
                            if (event.keyCode === 13){
                                addNote(list.id, document.getElementById(list.id).value);
                                document.getElementById(list.id).value = "";
                            }
                        }}>
                    </input>
                </div>
                
            </section>
        )
    }
}

export default ToDoNoteList;