import React, {Component} from "react";
import ToDoNoteHeader from "../../components/ToDoNoteHeadre";
import {addNote, listsSelector, notesSelector, editList, deleteList, changeStateList} from "../../reduser/cardList";
import NoteLists from "../NoteList";
import AddNote from "../../components/AddNote";
import { connect } from "react-redux";


class ToDoNote extends Component {

    state ={
        inputValue: ""
    }

    changeState = (value) => {
        this.setState({
            inputValue: value
        })
    }

    render(){
        const {list, isOpen} = this.props;
        return(
            <section className="card">
                <h1>
                    <ToDoNoteHeader 
                        listId={list.id}
                        listName={list.name}
                        isOpen = {isOpen}
                        onEditList = {this.props.onEditList}
                        onChangeStateList = {this.props.onChangeStateList}
                        onDeleteList = {this.props.onDeleteList}
                        list ={list}
                    />
                </h1>
                <div className="card body">
                    <NoteLists 
                        notes= {this.props.notes} 
                        lists= {this.props.lists} 
                        list= {this.props.list}/>
                </div>
                <AddNote 
                    listId={list.id} 
                    inputValue = {this.state.inputValue} 
                    onAddNote={this.props.onAddNote}
                    changeState={this.changeState}
                />
            </section>
        )
    }
}

export default connect(
    state => ({
        lists: listsSelector(state),
        notes: notesSelector(state)
    }),
    {
        onAddNote: (listId, discription) => addNote({listId,discription}),
        onEditList: (id, name) => editList({id, name}),
        onChangeStateList: changeStateList,
        onDeleteList: deleteList
    }
)(ToDoNote);