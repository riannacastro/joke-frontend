import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setComments } from '../../Redux/commentActions';



class CommentsContainer extends Component {

    componentDidMount() {
        this.props.dispatchSetComments()
    }

    render() {
        return (
            <div>
                <h1>Comments:</h1>
                <div>
                    {/* {this.props.comments.map(c => <p>{c.comment}</p>)} */}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        comments: state.comments
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchSetComments: () => dispatch(setComments())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsContainer);