import React, { Component } from 'react'
import { connect } from 'react-redux'
import { setRequests } from '../../Redux/actions/requestActions'
import RequestForm from './RequestForm'
import RequestsCard from './RequestsCard'
import Search from './Search'

class RequestsContainer extends Component {

    state = {
        requests: this.props.requests
    }

    handleRequests = (search) => {
        this.setState({
            requests: this.props.requests.filter((r => r.request.toLowerCase().includes(search.toLowerCase())))
        })
    }


    componentDidMount() {
        this.props.dispatchSetRequests()
    }


    render() {
        return (
            <div>
                < RequestForm />
                    <h1>Requests Feed:</h1>
                    < Search handleRequests={this.handleRequests}/>
                    {this.state.requests.map((r => <RequestsCard key={r.id} {...r}/>))}
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