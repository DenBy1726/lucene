import React, {Component} from 'react';
import {goBack} from 'connected-react-router'

import './index.scss';
import {Icon} from "antd";
import {connect} from "react-redux";

class SearchItem extends Component {
    render() {
        const {title, text, date, time} = this.props.document;

        return (
            <div className="SearchItem">
                <a onClick={() => this.props.goBack()}>
                    <Icon type="left" style={{cursor: "pointer"}}/> Назад
                    <h2>{title}</h2>
                </a>
                <p>{text}</p>
                <span>{date} {time}</span>
            </div>
        )
    }
}

export default connect(null, { goBack })(SearchItem);