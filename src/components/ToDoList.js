import React, {Component} from "react";
import ToDoNoteList from "./ToDoNoteList"
import { connect } from "react-redux";


class ToDoList extends Component{
        
    getFilterNote = (ListId) => this.props.store[1].filter(note => note.listId === ListId)

    elementsToDoNoteList = () =>{
        return(
            this.props.store[0].map(list => {
                return(
                    <section 
                        key = {list.id}
                        >
                        <ToDoNoteList 
                            list = {list} 
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
                <section className="card newList"> 
                    <div className="card input">
                        <a 
                            href="public/index.html" 
                            className="hand"
                            onClick={(e)=>{e.preventDefault()}}>
                            <div className="hand addList"
                                onClick={()=>{ 
                                    this.props.onAddList(document.getElementById("addList").value);
                                    document.getElementById("addList").value = "";
                                }}>
                            </div>
                        </a>
                        <input 
                            className="inputNewList"
                            type="text"  
                            id = "addList"
                            onKeyDown = {(event) => {
                                if (event.keyCode === 13){
                                    this.props.onAddList(document.getElementById("addList").value);
                                    document.getElementById("addList").value = "";
                                }        
                            }}
                            >
                        </input>
                    </div>
                </section>
            </div>
        )
    }
}
export default connect(
    state => ({
        store: state
    }),
    dispatch => ({
        onAddList: (listName) => {
            dispatch({type: "ADD_LIST", payload: listName})
        }
    })
)(ToDoList);