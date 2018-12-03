import React from "react";
import {render} from "react-dom";
import { Provider } from "react-redux";
import MyRoute from "./router/MyRouter"
import store from "./store/store"
import "./style/Trello.css";

render(
    <Provider store = {store}>
        <MyRoute/>
    </Provider>, 
    document.getElementById("root")
);