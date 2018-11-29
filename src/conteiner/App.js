import React,{Component} from "react";
import ToDo from "./ToDo";


class App extends Component{

    render(){
        return(
            <div>
                <header>
                        <div className="header">ToDo</div>
                </header>
                <section>
                    
                        <ToDo/>
                
                </section>
            </div>
        )
    }
}

export default App