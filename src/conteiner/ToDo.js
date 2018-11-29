import React, {Component} from "react";
import {addList, stateSelector, listsSelector} from "../reduser/cardList"
import ToDoNoteList from "./ToDoNote"
import { connect } from "react-redux";


class ToDoList extends Component{
        
    state ={
        inputValue: ""
    }

    render(){
        var inputTarget = this.state.inputTarget;
        return(
            <div>
                <ToDoNoteList lists = {this.props.lists}/>
                <section className="card newList"> 
                    <div className="card input">
                        <a 
                            href="public/index.html" 
                            className="hand"
                            onClick={(e)=>{e.preventDefault()}}>
                            <div className="hand addList"
                                onClick={()=>{ 
                                    this.props.onAddList(this.state.inputValue);
                                    this.setState({
                                        inputValue: ""
                                    })
                                    
                                }}>
                            </div>
                        </a>
                        <input 
                            value = {this.state.inputValue}
                            className="inputNewList"
                            type="text"  
                            onChange = {(e) => {
                                this.setState({
                                    inputValue: e.currentTarget.value,
                                })  
                            }}
                            onKeyPress = {(e) => {
                                if(e.charCode === 13){
                                    console.log("pressEnter")
                                    this.props.onAddList(this.state.inputValue);
                                    this.setState({
                                        inputValue: ""
                                    })
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
        store: stateSelector(state),
        lists: listsSelector(state)
    }),
    {
        onAddList: addList
    }
)(ToDoList);