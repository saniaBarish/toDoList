import React, {Component} from "react";
import Header from "./Header"
import {addNote, deleteList} from "../../reduser/cardList"
import NoteLists from "../Note/NoteLists"
import { connect } from "react-redux";


class ToDoNote extends Component {

    state ={
        isOpen:false,
        inputValue: ""
    }

    changeState = () =>{
        this.setState({
            isOpen:!this.state.isOpen
        })
    }

    render(){
        return(
            <section className="card">

                <h1>
                    <a className="hand" href="public/index.html" onClick={(e) => e.preventDefault()}>
                        <div id="penId" className="hand editList" onClick={()=> {this.changeState()}}></div>
                    </a>
                    <a className="hand" href="public/index.html" onClick={(e) => e.preventDefault()}>
                        <div className="hand deleteList" onClick={()=>this.props.onDeleteList(this.props.list.id)}></div>
                    </a>
                    <Header 
                        listId={this.props.list.id} 
                        listName={this.props.list.name} 
                        isOpen={this.state.isOpen}
                        changeState={this.changeState}
                    />
                </h1>

                <div className="card body">
                    <NoteLists 
                        notes= {this.props.store.notes} 
                        lists= {this.props.store.lists} 
                        list= {this.props.list}/>
                </div>

                <div className="card input">
                    <a className="hand" href="public/index.html"
                        onClick={(e) => {e.preventDefault()}}>
                        <div className="hand addList"
                            onClick={() => {
                                this.props.onAddNote(this.props.list.id, this.state.inputValue);
                                    this.setState({
                                        inputValue: ""
                                    })
                                }
                            }>
                        </div>
                    </a>
                    <input 
                        value={this.state.inputValue}
                        onChange = {(e) =>{
                            this.setState({
                                inputValue: e.currentTarget.value,
                            })
                            
                        }} onKeyPress={(e) => {
                            if (e.charCode === 13){
                                this.props.onAddNote(this.props.list.id, this.state.inputValue);
                                this.setState({
                                    inputValue: ""
                                })
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
        store: state.cardList
    }),
    dispatch => ({
        onAddNote: (listId, discription) => dispatch(addNote({listId,discription})),
        onDeleteList: (listId) => dispatch(deleteList(listId))
    })
)(ToDoNote);