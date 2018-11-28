import React from "react";
import {render} from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";

import {initialData} from "./initialData"
import App from "./App";
import "./style/Trello.css";

var _= require("lodash");


const cardList = (state = initialData, action) =>{
    if (action.type === "ADD_LIST"){
        return [
            [...state[0], {
                id: +_.uniqueId(),
                name: action.payload
            }],
            [...state[1]]
        ]
    }
    else if( action.type === "ADD_NOTE"){
        return [
            [...state[0]],
            [...state[1], {
                id: +_.uniqueId(),
                discription: action.payload.discription,
                listId: action.payload.listId
            }]
        ]
    }
    else if(action.type === "DELETE_LIST"){
        return[
            state[0].filter(list => list.id !== action.payload),
            state[1].filter(note => note.listId !== action.payload)
        ]
    }
    else if(action.type === "EDIT_LIST"){
        return[
            state[0].map(list =>{
                if (list.id === action.payload.id){
                    list.name = action.payload.name;
                    return list
                }
                return list
            }),
            state[1]
        ]
    }
    else if(action.type === "EDIT_NOTE"){
        return[
            state[0],
            state[1].map(note =>{
                if (note.id === action.payload.id){
                    note.discription = action.payload.discription;
                    console.log(note)
                    return note
                }
                return note
            })
        ]
    }
    else if(action.type === "DELETE_NOTE"){
        return[
            state[0],
            state[1].filter(note => note.id !== action.payload)
        ]
    }
    else if(action.type === "TRANSFER_NOTE"){
        return[
            state[0],
            state[1].map(note => {
                if (note.id === action.payload.id){
                    note.listId = +action.payload.listId
                    return note
                }

                return note
            })
        ]
    }
    return state
}

const store = createStore(cardList, window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__());

render(
    <Provider store = {store}>
        <App/>
    </Provider>, 
    document.getElementById("root")
);