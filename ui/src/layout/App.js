import React, {Fragment} from "react"
import Navbar from "../component/Navbar/index";
import './App.css'
import {Route, Switch} from "react-router-dom";
import {HomeContainer} from "../container/HomeContainer";
import {DatabaseContainer} from "../container/DatabaseContainer";
import ApiContainer from "../container/ApiContainer";
import Page404 from "../fallback/404";

export const App = ({}) => (
    <Fragment>
        <Navbar/>
        <Switch>
            <Route exact path="/" key="home" component={HomeContainer}/>
            <Route exact path="/database" key="database" component={DatabaseContainer}/>
            <Route exact path="/api" key="api" component={ApiContainer}/>
            
            <Route component={Page404}/>
        </Switch>
    </Fragment>
);