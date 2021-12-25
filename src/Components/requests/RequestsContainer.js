import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setRequests } from '../../Redux/actions/requestActions'
import RequestsCard from './RequestsCard'

class RequestsContainer extends Component {


    componentDidMount() {
        this.props.dispatchSetRequests()
    }


    render() {
        return (
            <div>
                <h1>Requests Feed:</h1>
                {this.props.requests.map((r => <RequestsCard {...r}/>))}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        requests: state.requests
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchSetRequests: () => dispatch(setRequests())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RequestsContainer)