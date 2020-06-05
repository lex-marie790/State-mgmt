import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore, applyMiddleware } from 'redux';
import smurfReducer from './Reducers/reducers'
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';


const store = createStore(smurfReducer, applyMiddleware(thunk));


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
        document.getElementById("root"));
