import React, {Component} from "react"
import OpenHeader from "../../components/OpenHeader"
import CloseHeader from "../../components/CloseHeader"
import {connect} from "react-redux"
import {editList} from "../../reduser/cardList"


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
        store: state.cardList
    }),
    {
        onEditList: (id, name) => editList({id, name})
    }
)(Header)