import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App'
import * as serviceWorker from './serviceWorker';
import {Provider} from "react-redux";
import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./reducers/root.reducer";
import reduxPromise from 'redux-promise';
import {BrowserRouter, Redirect, Route, Switch} from "react-router-dom";
import {appConstants} from "./constants/constants";
import Login from "./login/Login";
import Rooms from "./components/Rooms";
import Home from "./components/Home";


ReactDOM.render(

    <Provider store={applyMiddleware(reduxPromise)(createStore)(rootReducer)}>
        <BrowserRouter>
            <App >
                <Switch>
                    <Route path={appConstants.roomsRoute} component={Rooms}/>

                    <Route path={appConstants.loginRoute} component={Login}/>
                    <Route path={appConstants.homeRoute} component={Home}/>

                    <Route path="*">
                        <Redirect to={appConstants.homeRoute} component={Home}/>
                    </Route>
                </Switch>
            </App>
        </BrowserRouter>
    </Provider>


    ,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
