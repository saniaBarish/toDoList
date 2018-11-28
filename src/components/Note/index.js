import React,{Component} from "react";
import OpenNote from "./OpenNote";
import CloseNote from "./CloseNote";
import { connect } from "react-redux";

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
        store: state
    }),
    dispatch => ({
        onEditNote: (id, discription) => {
            dispatch({type:"EDIT_NOTE", payload:{
                    id: id,
                    discription: discription
                }
            })
        },
        onDeleteNote: (id) => {
            dispatch({type:"DELETE_NOTE", payload: id})
        },
        onTransferNote: (id, listId) => [
            dispatch({type:"TRANSFER_NOTE", payload:{
                id: id,
                listId: listId
            }
        })
        ]
    })
)(Note);