import React, {Component} from "react";
import Header from "./Header/"
import Note from "./Note"
import { connect } from "react-redux";


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
        const {list} = this.props;
        const elemenstNote = () => {
            return(
                this.props.store[1].filter(note => note.listId === list.id).map(note => {
                    return (
                        <section key = {note.id}> 
                            <Note 
                                note={note} 
                                lists={this.props.store[0]} 
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
                        <div className="hand deleteList" onClick={()=>this.props.onDeleteList(list.id)}></div>
                    </a>
                    <Header 
                        listId={list.id} 
                        listName={list.name} 
                        isOpen={this.state.isOpen}
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
                                this.props.onAddNote(list.id, document.getElementById(list.id).value);
                                document.getElementById(list.id).value = "";}
                            }>
                        </div>
                    </a>
                    <input 
                        id = {list.id}
                        onKeyDown = {(event) =>{
                            if (event.keyCode === 13){
                                this.props.onAddNote(list.id, document.getElementById(list.id).value);
                                document.getElementById(list.id).value = "";
                            }
                        }}>
                    </input>
                </div>
                
            </section>
        )
    }
}

export default connect(
    state => ({
        store: state
    }),
    dispatch => ({
        onAddNote: (listId, discription) => {
            dispatch({type: "ADD_NOTE", payload: {
                discription: discription,
                listId: listId
            }})
        },
        onDeleteList: (listId) => {
            dispatch({type: "DELETE_LIST", payload: listId})
        }
    })
)(ToDoNoteList);