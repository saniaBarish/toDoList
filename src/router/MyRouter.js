import React, {Component} from "react";
import { HashRouter as Router, Route} from "react-router-dom";
import App from "../components/App"
import OneToDoNote from "../conteiner/ToDoNoteList/OneToDoNote";
import { connect } from "react-redux";
import {listsSelector} from "../reduser/cardList"

class MyRoute extends Component{

    routeElements = (lists) =>{
        
        return(
            lists.map(list => {
                return(
                    <Route 
                        key = {list.id}
                        path = {"/" + list.id.toString()}
                        render={() => <OneToDoNote list={list} isOpen={list.isOpen}/>}
                    />
                )
            })
        )
        
    }

    render(){
        // const tmp = this.routeElements(this.props.lists);
        return(
            <Router>
                <div>
                    <Route path="/" exact render={()=><App/>}/>
                    {/* <Route path="/1" exact render={()=><ToDoNote list={this.props.lists[0]} isOpen={this.props.lists[0].isOpen}/>}/> */}
                    {this.routeElements(this.props.lists)}
                   
                </div>
            </Router> 
        )
    }
}

export default connect(
    state => ({
        lists: listsSelector(state)
    }),


)(MyRoute)