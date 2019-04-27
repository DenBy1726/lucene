import React, { Component } from 'react';
import { connect } from 'react-redux';

class HomeContainer extends Component {
    render() {
        console.warn(this.props);
        return (
            <div>
                dfgdfgdfg
            </div>
        )
    }
}

const mapStateToProps = ({ document }) => ({
    document
});

const mapDispatchToProps = (dispatch) => ({
    
});


export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);