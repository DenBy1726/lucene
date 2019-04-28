import React, {Component} from 'react';
import LeftMenu from './LeftMenu'
import {Drawer, Icon, Input} from 'antd';
import {withRouter} from "react-router-dom";
import Image from "../../Common/Image";

import './Navbar.scss';

const Search = Input.Search;

class Navbar extends Component {
    
    state = {
        current: '/',
        visible: false,
        searchLine: ''
    };
    
    showDrawer = () => {
        this.setState({
            visible: true,
        });
    };

    onClose = () => {
        this.setState({
            visible: false,
        });
    };

    handleClick = e => {
        this.onClose();
        this.props.history.push(e.key);
    };

    handleSearch = (query = '') => {
        const { document, history, fetchDocuments } = this.props;

        history.push('/');
        fetchDocuments({query, size: document.size, page: 1});
    }

    handleChangeSearchLine = ({ target }) => this.setState({searchLine: target.value});


    render() {
        return (
            <nav className="menuBar">
                <div className="logo" onClick={() => this.handleClick({key: "/"})}>
                    <Image size={64} src={"/img/icons/favicon.png"}/>
                </div>
                <div className="menuCon">
                    <div className="leftMenu">
                        <LeftMenu onClick={this.handleClick}/>
                    </div>
                    <div className="search">
                        <Search
                            value={this.state.searchLine}
                            onChange={this.handleChangeSearchLine}
                            placeholder="Search"
                            onSearch={value => this.handleSearch(value)}
                            style={{ width: 300 }}
                        />
                    </div>
                    <div className="barsMenu">
                        <Icon type="menu-unfold" onClick={this.showDrawer}/>
                    </div>
                    <Drawer
                        title="Меню"
                        placement="right"
                        closable={false}
                        onClose={this.onClose}
                        visible={this.state.visible}>
                        <LeftMenu onClick={this.handleClick}/>
                    </Drawer>

                </div>
            </nav>
        );
    }
}

export default withRouter(Navbar);