import React from "react";
import ToDoNote from "./ToDoNote"

const ToDoNoteList = ({lists}) =>{
    return(
        lists.map(list => {
            return(
                <section 
                    key = {list.id}
                    >
                    <ToDoNote 
                        list = {list} 
                    />
                </section>
               
            )
        })
    )
}

export default ToDoNoteList