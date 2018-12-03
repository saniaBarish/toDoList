import React from "react";

const NewList = ({inputValue, onAddList, changeState}) => {
    return(
        <section className="card newList"> 
                    <div className="card input">
                        <a 
                            href="public/index.html" 
                            className="hand"
                            onClick={(e)=>{e.preventDefault()}}>
                            <div className="hand addList"
                                onClick={()=>{ 
                                    onAddList(inputValue);
                                    changeState("")
                                }}>
                            </div>
                        </a>
                        <input 
                            value = {inputValue}
                            className="inputNewList"
                            type="text"  
                            onChange = {(e) => {
                               changeState(e.currentTarget.value)
                            }}
                            onKeyPress = {(e) => {
                                if(e.charCode === 13){
                                    onAddList(inputValue);
                                    changeState("")
                                }
                            }}
                            >
                        </input>
                    </div>
                </section>
    )
}

export default NewList