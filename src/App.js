import React,{Component} from "react";
import ToDoList from "./components/ToDoList";


class App extends Component{

    render(){
        return(
            <div>
                <header>
                        <div className="header">ToDo</div>
                </header>
                <section>
                    <div>
                        <ToDoList/>
                    </div>
                </section>
            </div>
        )
    }
}

export default App