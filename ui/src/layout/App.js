import React, {Fragment} from "react"
import './App.scss'
import {Route, Switch} from "react-router-dom";
import HomeContainer from "../container/HomeContainer";
import NavbarContainer from "../container/Common/NavbarContainer";
import {DatabaseContainer} from "../container/DatabaseContainer";
import ApiContainer from "../container/ApiContainer";
import Page404 from "../fallback/404";

export const App = ({}) => (
    <Fragment>
        <NavbarContainer />
        <Switch>
            <Route exact path="/" key="home" component={HomeContainer}/>
            <Route exact path="/database" key="database" component={DatabaseContainer}/>
            <Route exact path="/api" key="api" component={ApiContainer}/>
            <Route component={Page404}/>
        </Switch>
    </Fragment>
);