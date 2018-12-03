import React, {Component} from "react";
import {addList, listsSelector} from "../reduser/cardList"
import ToDoNoteList from "./ToDoNoteList"
import NewList from "../components/NewList"
import { connect } from "react-redux";


class ToDoList extends Component{
        
    state ={
        inputValue: ""
    }

    changeState = (value) => {
        this.setState({
            inputValue: value
        })
    }

    render(){
        return(
            <div>
                <ToDoNoteList lists = {this.props.lists}/>
                <NewList 
                    inputValue={this.state.inputValue}
                    onAddList={this.props.onAddList}
                    changeState={this.changeState}    
                />
            </div>
        )
    }
}
export default connect(
    state => ({
        lists: listsSelector(state)
    }),
    {
        onAddList: addList
    }
)(ToDoList);