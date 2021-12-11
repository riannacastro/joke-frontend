import React, { Component } from 'react';
import { connect } from 'react-redux';
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
export default connect()(CommentsContainer);