import React, { Component } from 'react'
import { connect } from 'react-redux';
import { addRequest } from '../../Redux/actions/requestActions';

class RequestForm extends Component {

    state = {
        username: "",
        request: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatchAddRequest(this.state)
        this.setState({
            username: "",
            request: ""
        })
    }

    render() {
        return (
            <form className="request-form" onSubmit={this.handleSubmit}>
                <h1>What other joke topics would you like to see?<br />Add to our feed below!</h1>
                <label>Nickname: </label>
                <input 
                    type="text" 
                    name="username"
                    onChange={this.handleChange} 
                    value={this.state.username} 
                    placeholder="ex: Anonymous"
                />
                <br />
                <label>Request: </label>
                <input 
                    type="text" 
                    name="request"
                    onChange={this.handleChange} 
                    value={this.state.request} 
                    placeholder="ex: Random Jokes"
                />
                <br />
                <input id="submit-btn" type="submit" />
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchAddRequest: (request) => dispatch(addRequest(request))
    }
}

export default connect(null, mapDispatchToProps)(RequestForm)
