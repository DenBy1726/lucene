import React, {Component, Fragment} from 'react';
import {Menu, Icon} from 'antd';
import {ResponsiveMenu} from "./ResponsiveMenu";
import {withRouter} from "react-router-dom";

const menu = [
    <Menu.Item key="/">
        <div className="menuPoint"><Icon type="home"/>Главная страница</div>
    </Menu.Item>,
    <Menu.Item key="api">
        <div className="menuPoint"><Icon type="api"/>API</div>
    </Menu.Item>,
    <Menu.Item key="help">
        <div className="menuPoint"><Icon type="question-circle"/>Справка</div>
    </Menu.Item>];

const LeftMenu = ({onClick}) => (
    <ResponsiveMenu onClick={onClick} width={767} menu={menu}/>
);

export default withRouter(LeftMenu);