import React,{Component} from "react";
import OpenNote from "../../components/OpenNote";
import CloseNote from "../../components/CloseNote";
import { connect } from "react-redux";
import {editNote, deleteNote, transferNote, changeStateNote} from "../../reduser/cardList"

class Note extends Component{
    state = {
        selectValue: this.props.note.listId,
        inputValue: this.props.note.discription
    }

    changeSelectValue = (value) => {
        this.setState({
            selectValue: value
        })
    }

    changeInputValue = (value) => {
        this.setState({
            inputValue: value
        })
    }

    render(){
        const {note, lists, isOpen} = this.props;
        return(
            <div>
                {isOpen ?
                    <OpenNote 
                        lists={lists}
                        noteId={note.id}
                        noteDiscription = {note.discription}
                        noteListId = {note.listId}
                        editNote={this.props.onEditNote}
                        transferNote ={this.props.onTransferNote}
                        selectValue = {this.state.selectValue}
                        inputValue = {this.state.inputValue}
                        changeSelectValue = {this.changeSelectValue}
                        changeInputValue = {this.changeInputValue}
                        onChangeStateNote = {this.props.onChangeStateNote}
                        /> : 
                    <CloseNote noteId = {note.id} noteDiscription={note.discription} onChangeStateNote = {this.props.onChangeStateNote} deleteNote={this.props.onDeleteNote}/>
                }
            </div>
        )
    }

    
}
// Note.propTypes={

// }

export default connect(
   null,
    {
        onEditNote: (id, discription) => editNote({id, discription}) ,
        onDeleteNote: deleteNote,
        onTransferNote: (id, listId) => transferNote({id, listId}),
        onChangeStateNote: changeStateNote
    }
)(Note);