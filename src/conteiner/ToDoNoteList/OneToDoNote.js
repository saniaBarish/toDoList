import React, {Component} from "react";
import ToDoNoteHeader from "../../components/ToDoNoteHeadre";
import {addNote, listsSelector, notesSelector, editList, deleteList, changeStateList} from "../../reduser/cardList";
import NoteLists from "../NoteList";
import { Link} from "react-router-dom";
import AddNote from "../../components/AddNote";
import { connect } from "react-redux";


class OneToDoNote extends Component {
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
        const newLocal = require('../../style/img/back.png');
        return(
            <div>
                <Link to={"/"}><img className="bigCardImg" src={newLocal} alt="альтернативный текст"/></Link>
                <section className="card bigCard">
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
                    <div className="card body bigCard">
                        <NoteLists 
                            notes= {this.props.notes} 
                            lists= {this.props.lists} 
                            list= {this.props.list}/>
                    </div>
                    <div className="card bigCard input">
                        <AddNote 
                            listId={list.id} 
                            inputValue = {this.state.inputValue} 
                            onAddNote={this.props.onAddNote}
                            changeState={this.changeState}
                        />
                    </div>
                </section>
            </div>
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
)(OneToDoNote);