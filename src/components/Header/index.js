import React, {Component} from "react"
import OpenHeader from "./OpenHeader"
import CloseHeader from "./CloseHeader"


class Header extends Component{

    render(){
        const {listId, listName, isOpen, editList, changeState} = this.props;
        
        return(
            isOpen ? 
            <OpenHeader listId={listId} listName={listName} editList={editList} changeState={changeState}/> : 
            <CloseHeader listName={listName}/>
        )
    }
}

export default Header