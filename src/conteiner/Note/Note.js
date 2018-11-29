import React,{Component} from "react";
import OpenNote from "./OpenNote";
import CloseNote from "../../components/CloseNote";
import { connect } from "react-redux";
import {editNote, deleteNote, transferNote} from "../../reduser/cardList"

class Note extends Component{
    state = {
        isOpen: false
    }

    render(){
        const {note, lists} = this.props;
        return(
            <div>
                {this.state.isOpen ?
                    <OpenNote 
                        note = {note} 
                        changeState = {this.changeState} 
                        lists= {lists} 
                        editNote={this.props.onEditNote} 
                        transferNote ={this.props.onTransferNote}
                        /> : 
                    <CloseNote note = {note} changeState = {this.changeState} deleteNote={this.props.onDeleteNote}/>
                }
            </div>
        )
    }

    changeState = () => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default connect(
    state => ({
        store: state.cardList
    }),
    {
        onEditNote: (id, discription) => editNote({id, discription}) ,
        onDeleteNote: deleteNote,
        onTransferNote: (id, listId) => transferNote({id, listId})
    }
)(Note);