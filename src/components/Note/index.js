import React,{Component} from "react";
import OpenNote from "./OpenNote";
import CloseNote from "./CloseNote";

class Note extends Component{
    state = {
        isOpen: false
    }

    render(){
        const {note, lists, editNote, deleteNote, transferNote} = this.props;
        return(
            <div>
                {this.state.isOpen ?
                    <OpenNote 
                        note = {note} 
                        changeState = {this.changeState} 
                        lists= {lists} 
                        editNote={editNote} 
                        transferNote ={transferNote}/> : 
                    <CloseNote note = {note} changeState = {this.changeState} deleteNote={deleteNote}/>
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

export default Note;