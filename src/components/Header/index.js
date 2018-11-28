import React, {Component} from "react"
import OpenHeader from "./OpenHeader"
import CloseHeader from "./CloseHeader"
import {connect} from "react-redux"


class Header extends Component{

    render(){
        const {listId, listName, isOpen, changeState} = this.props;
        
        return(
            isOpen ? 
            <OpenHeader listId={listId} listName={listName} editList={this.props.onEditList} changeState={changeState}/> : 
            <CloseHeader listName={listName}/>
        )
    }
}

export default connect(
    state => ({
        store: state
    }),
    dispatch => ({
        onEditList: (id, name) =>{
            dispatch({type: "EDIT_LIST", payload: {
                id: id,
                name: name
            }})
        }
    })
)(Header)