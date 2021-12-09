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

    render() {
        return (
            <form>
                <label htmlFor="joke-input">Joke:</label>
                <input id="joke-input" onChange={this.handleChange} type="text" placeholder="Enter joke..." />
                <input type="submit" />
            </form>
        )
    }
}
