import React, {Component, Fragment} from 'react';
import Dotdotdot from 'react-dotdotdot';
import {Link} from 'react-router-dom';
import {Empty, Pagination} from 'antd';
import {Card} from 'antd';
import {push} from 'connected-react-router'

import './index.scss';
import {connect} from "react-redux";

class Home extends Component {

    handleChangePage = (page) => {
        const {size, query} = this.props.documents;

        if (query.length !== 0) {
            this.props.fetchDocuments({query, page, size});
        } else {
            this.props.fetchDocumentsOnStart({page, size});
        }
        window.scrollTo(0, 0);
    };

    onShowSizeChange = (page, size) => {
        const {query} = this.props.documents;

        if (query.length !== 0) {
            this.props.fetchDocuments({query, page, size});
        } else {
            this.props.fetchDocumentsOnStart({page, size});
        }
        window.scrollTo(0, 0);
    };

    render() {
        const {documents, push} = this.props;
        const pageSizeOptions = ['5', '10', '20', '30', '40'];
        if (documents.loading === false && documents.total === 0)
            return <Empty
                description={<div>
                    Доументы не найдены.
                    <br/>
                    Измените запрос или <a onClick={() => push("/api")}>добавьте новые</a> документы
                </div>}
                image="/img/notFound.png"
            />;
        let data = new Array(documents.items.length || documents.size).fill(1);
        return (
            <div className="homePage">
                {data.map((x, i) => {
                    const item = documents.items[i];
                    return <div className="searchItem" key={i}>
                        <Card loading={documents.loading}>
                            <Dotdotdot clamp={1}>
                                <Link to={`/item/${item && item.id}`}>{item && item.title}</Link>
                            </Dotdotdot>
                            <Dotdotdot clamp={3}><p>{item && item.text}</p></Dotdotdot>
                            <p>{item && item.date}</p>
                        </Card>
                    </div>;
                })}
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

export default connect(null, {push})(Home);