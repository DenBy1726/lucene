import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchDocumentsOnStart, fetchDocuments } from '../actions/document';


import Home from '../component/Home/';

class HomeContainer extends Component {
    componentDidMount() {
        const { page, size } = this.props.document
        this.props.fetchDocumentsOnStart({ page, size });
    }

    render() {
        const { fetchDocumentsOnStart, document, fetchDocuments } = this.props;

        return (
            <Home
                documents={document}
                fetchDocuments={fetchDocuments}
                fetchDocumentsOnStart={fetchDocumentsOnStart}
            />
        )
    }
}

const mapStateToProps = ({ document }) => ({
    document
});

const mapDispatchToProps = (dispatch) => ({
    fetchDocumentsOnStart: (data) => dispatch(fetchDocumentsOnStart(data)),
    fetchDocuments: (data) => dispatch(fetchDocuments(data))
});


export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);