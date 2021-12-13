import React, { Component } from 'react';
import { addJoke } from '../../Redux/actions/jokeActions';
import { connect } from 'react-redux';

class JokeForm extends Component {
    state = {
        joke: ""
    }

    handleChange = (e) => {
        this.setState({joke: e.target.value})
        
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.addJoke(this.state)
        this.setState({joke: ""})
        this.props.routerProps.history.push('/jokes')
    }

    render() {
        return (
            <form className="joke-form" onSubmit={this.handleSubmit}>
                <h2>Have a new joke? <br/> Enter it here!</h2>
                <label htmlFor="joke-input">New Joke: </label>
                <input id="joke-input" 
                    onChange={this.handleChange} 
                    value={this.state.joke} 
                    type="text" 
                    placeholder="Enter joke..." />
                <input id="submit-btn" type="submit" />
            </form>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        addJoke: (joke) => dispatch(addJoke(joke))
    }
}

export default connect(null, mapDispatchToProps)(JokeForm)
