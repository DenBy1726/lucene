import React from "react";
import { connect } from 'react-redux';
import {Route, Switch} from "react-router-dom";

import HomeContainer from "../container/HomeContainer";
import NavbarContainer from "../container/Common/NavbarContainer";
import SearchItemContainer from "../container/SearchItemContainer";
import Spinner from '../component/Common/Spinner/'
import {DatabaseContainer} from "../container/DatabaseContainer";
import ApiContainer from "../container/ApiContainer";
import Page404 from "../fallback/404";

import './App.scss'


const App = ({ document }) => (
    <Spinner spinning={document.loading}>
        <NavbarContainer />
        <Switch>
            <Route exact path="/item/:id" key="home" component={SearchItemContainer}/>
            <Route exact path="/" key="home" component={HomeContainer}/>
            <Route exact path="/database" key="database" component={DatabaseContainer}/>
            <Route exact path="/api" key="api" component={ApiContainer}/>
            <Route component={Page404}/>
        </Switch>
    </Spinner>
);

const mapStateToProps = ({ document }) => ({
    document
});

export default connect(mapStateToProps)(App);