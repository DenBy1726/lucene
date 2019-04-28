import React, { Component } from 'react';

import './index.scss';

export default class SearchItem extends Component {
    render() {
        const { title, text, date, time } = this.props.document;

        return (
            <div className="SearchItem">
                <h2>{title}</h2>
                <p>{text}</p>
                <span>{date} {time}</span>
            </div>
        )
    }
}
