import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../../component/Common/Navbar/';

import { fetchDocuments } from '../../actions/document';

class NavbarContainer extends Component {
    render() {
        console.warn(this.props.document)
        return (
            <Navbar
                document={this.props.document}
                fetchDocuments={this.props.fetchDocuments}
            />
        )
    }
}

const mapStateToProps = ({ document }) => ({
    document
});

const mapDispatchToProps = (dispatch) => ({
    fetchDocuments: (query) => dispatch(fetchDocuments(query))
});


export default connect(mapStateToProps, mapDispatchToProps)(NavbarContainer);