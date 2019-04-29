import React, {Component, Fragment} from "react";
import {connect} from 'react-redux';
import {Route, Switch} from "react-router-dom";

import HomeContainer from "../container/HomeContainer";
import NavbarContainer from "../container/Common/NavbarContainer";
import SearchItemContainer from "../container/SearchItemContainer";
import {DatabaseContainer} from "../container/DatabaseContainer";
import ApiContainer from "../container/ApiContainer";
import Page404 from "../fallback/404";

import './App.scss'
import HelpContainer from "../container/HelpContainer";


class App extends Component {
    render() {
        const {document, router} = this.props;
        return <Fragment>
            <NavbarContainer/>
            <Switch>
                <Route exact path="/item/:id" key="home" component={SearchItemContainer}/>
                <Route exact path="/" key="home" component={HomeContainer}/>
                <Route exact path="/database" key="database" component={DatabaseContainer}/>
                <Route exact path="/api" key="api" component={ApiContainer}/>
                <Route exact path="/help" key="help" component={HelpContainer}/>
                <Route component={Page404}/>
            </Switch>
        </Fragment>
    }
}

const mapStateToProps = ({document, router}) => ({
    document, router
});

export default connect(mapStateToProps)(App);