import React, {Component} from "react";
import ListElements from "../../components/ListElements"

class OpenNote extends Component {  
    state = {
        selectValue: this.props.note.listId,
        inputValue: this.props.note.discription
    } 
    
    render (){
        const {note, changeState, lists, editNote, transferNote} = this.props
        return(
            <div className="openList">
                <input
                    id = {note.id + "input"} 
                    type="text" 
                    defaultValue={note.discription}
                    onKeyDown={(event) => {
                        this.setState({
                            inputValue: event.currentTarget.value
                        })
                        if (event.keyCode === 27){
                            changeState()
                        }
                        else if(event.keyCode === 13){
                            editNote(note.id, this.state.inputValue);
                            changeState();
                        }
                    }}>
                </input>
                <div className="openList select">
                    <select  defaultValue = {note.listId} onChange={(e) => {
                        this.setState({
                            selectValue: e.currentTarget.value
                        })
                        }}> 
                        <option disabled>---select list---</option>
                        <ListElements lists = {lists}/>
                    </select>
                    <button onClick={()=>{
                            transferNote(note.id, this.state.selectValue)
                            editNote(note.id, this.state.inputValue);
                            changeState();
                        }}>
                        Done
                    </button>
                </div>
            </div>  
        )
    }
}

export default OpenNote;