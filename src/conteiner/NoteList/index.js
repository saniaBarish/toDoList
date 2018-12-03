import React from "react";
import Note from "./Note"

const NoteLists = ({notes, lists, list}) => {
    return(
        notes.filter(note => note.listId === list.id).map(note => {
            return (
                <section key = {note.id} > 
                    <Note 
                        note={note} 
                        lists={lists}
                        isOpen={note.isOpen} 
                    /> 
                </section>
            )
        })
    )
}

export default NoteLists