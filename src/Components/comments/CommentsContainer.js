import React, { Component } from 'react';
import { connect, createDispatchHook } from 'react-redux';
import { setComments } from '../../Redux/commentActions';



class CommentsContainer extends Component {
    render() {
        return (
            <div>
                <h1>Comments:</h1>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchSetComments: () => dispatch(setComments())
    }
}

export default connect(null, mapDispatchToProps)(CommentsContainer);