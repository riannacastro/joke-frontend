import React, { Component } from 'react'

export default class JokeForm extends Component {
    state = {
        joke: ""
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        })
        
    }

    handleSubmit = () => {
        e.preventDefault()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="joke-input">Joke:</label>
                <input id="joke-input" onChange={this.handleChange} type="text" placeholder="Enter joke..." />
                <input type="submit" />
            </form>
        )
    }
}
