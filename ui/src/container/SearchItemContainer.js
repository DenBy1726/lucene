import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchDocument, clearCurrentState } from '../actions/document';

import SearchItem from '../component/SearchItem/';

class SearchItemContainer extends Component {
    componentDidMount() {
        this.props.fetchDocument(this.props.match.params.id);
    }

    componentWillUnmount() {
        this.props.clearCurrentState();
    }

    render() {
        return (
            <SearchItem document={this.props.document.currentItem} />
        )
    }
}

const mapStateToProps = ({ document }) => ({ document });

const mapDispatchToProps = (dispatch) => ({
    fetchDocument: (id) => dispatch(fetchDocument(id)),
    clearCurrentState: () => dispatch(clearCurrentState())
});


export default connect(mapStateToProps, mapDispatchToProps)(SearchItemContainer);