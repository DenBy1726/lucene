import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../../component/Common/Navbar/';

import { fetchDocuments, fetchDocumentsOnStart } from '../../actions/document';

class NavbarContainer extends Component {
    render() {
        return (
            <Navbar
                document={this.props.document}
                fetchDocuments={this.props.fetchDocuments}
                fetchDocumentsOnStart={this.props.fetchDocumentsOnStart}
            />
        )
    }
}

const mapStateToProps = ({ document }) => ({
    document
});

const mapDispatchToProps = (dispatch) => ({
    fetchDocuments: (query) => dispatch(fetchDocuments(query)),
    fetchDocumentsOnStart: (data) => dispatch(fetchDocumentsOnStart(data)),

});


export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);