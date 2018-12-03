import React from "react";
import ToDo from "../conteiner/ToDo";

const App = () => {
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

export default App