import React, {Component} from "react";
import ToDoNoteList from "./ToDoNoteList"
import {lists, notes} from "../initialData"

class ToDoList extends Component{

    state = {
        lists: lists,
        notes: notes
    }

    deleteList = (ListId) =>{
        const newLists = this.state.lists.filter(list => list.id !== ListId)

        this.setState({
            lists: newLists
        })
    }

    deleteNote = (noteId) =>{
        const newNotes = this.state.notes.filter(note => note.id !== noteId)

        this.setState({
            notes: newNotes
        })
    }

    editNote = (id, discription) =>{
        const newNotes = this.state.notes.map(note =>{
            if (note.id === id){
                note.discription = discription;
            }
            return note
        })
        this.setState({
            notes: newNotes
        })
    }

    transferNote = (noteId, newListId) =>{
        const newNotes = this.state.notes.slice();
        newNotes.forEach(note =>{
            if (note.id === noteId){
                note.listId = +newListId
                console.log(note)
            }
        })

        this.setState({
            notes: newNotes
        })


    }
        
    


    getFilterNote = (ListId) => this.state.notes.filter(note => note.listId === ListId)

    addList = (name) => {
        var _= require('lodash');
        var newLists = this.state.lists.concat([{
            id: +_.uniqueId(),
            name: name
        }])
        this.setState({
            lists: newLists
        })
    }

    addNote = (ListId, discription) => {
        var _= require('lodash');
        var newNotes = this.state.notes.concat([{
            id: +_.uniqueId(),
            discription: discription,
            listId: ListId
        }])
        this.setState({
            notes: newNotes
        })
    }

    elementsToDoNoteList = () =>{
        return(
            this.state.lists.map(list => {
                return(
                    
                        <section 
                            className="list list-inline"
                            key = {list.id}
                        >
                            <ToDoNoteList 
                                list = {list} 
                                notes = {this.getFilterNote(list.id)}
                                addNote = {this.addNote}
                                lists = {this.state.lists}
                                editNote = {this.editNote}
                                deleteNote = {this.deleteNote}
                                deleteList = {this.deleteList}
                                transferNote = {this.transferNote}
                            />
                        </section>
                   
                )
            })
        )
    }





    render(){
        return(
            <div>
                {this.elementsToDoNoteList()}
                <section className="list new-list list-inline"> 
                    
                        <input 
                            type="text"  
                            id = "addList"
                            onKeyDown = {(event) => {
                                if (event.keyCode === 13){
                                    this.addList(document.getElementById("addList").value);
                                    document.getElementById("addList").value = "";
                                }        
                            }}
                        >
                        </input>
                   
                </section>
            </div>
        )
    }
}
export default ToDoList;