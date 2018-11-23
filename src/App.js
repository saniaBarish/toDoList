import React,{Component} from "react";
import ToDoList from "./components/ToDoList";
import "./style/trello.css"


class App extends Component{

    render(){
        return(
            <div>
                <header>
                    <div className="row">
                        <h1 className="app-name left">ToDo</h1>
                    </div>
                </header>
                <section className="lists-container">
                    <div className="row">
                        <ToDoList/>
                    </div>
                </section>
            </div>
        )
    }
}

export default App;