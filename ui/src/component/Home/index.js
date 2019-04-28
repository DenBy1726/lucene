import React, { Component } from 'react';
import Dotdotdot from 'react-dotdotdot';
import { Link } from 'react-router-dom';
import { Pagination } from 'antd';
import { Card } from 'antd';

import './index.scss';

export default class Home extends Component {

    handleChangePage = (page) => {
        const { size, query } = this.props.documents;

        if (query.length !== 0) {
            this.props.fetchDocuments({query, page, size});
        } else {
            this.props.fetchDocumentsOnStart({ page, size });
        }
        window.scrollTo(0, 0);
    }

    onShowSizeChange = (page , size) => {
        const { query } = this.props.documents;

        if (query.length !== 0) {
            this.props.fetchDocuments({query, page, size});
        } else {
            this.props.fetchDocumentsOnStart({ page, size });
        }
        window.scrollTo(0, 0);
    }

    render() {
        const { documents } = this.props;
        const pageSizeOptions = ['10', '20', '30', '40'];
        return (
            <div className="homePage">
                {documents.items.length !== 0 && documents.items.map((item) => (
                    <div className="searchItem" key={item.id}>
                        <Card>
                            <Dotdotdot clamp={1}>
                                <Link to={`/item/${item.id}`}>{item.title}</Link>
                            </Dotdotdot>
                            <Dotdotdot clamp={3}><p>{item.text}</p></Dotdotdot>
                            <p>{item.date}</p>
                        </Card>
                    </div>
                ))}
                <Pagination 
                    current={documents.page}
                    total={documents.total}
                    pageSize={documents.size}
                    onChange={this.handleChangePage}
                    onShowSizeChange={this.onShowSizeChange}
                    pageSizeOptions={pageSizeOptions}
                    showSizeChanger
                />
            </div>
        )
    }
}
