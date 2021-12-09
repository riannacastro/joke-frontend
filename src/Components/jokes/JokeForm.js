import React, { Component } from 'react'

export default class JokeForm extends Component {
    render() {
        return (
            <form>
                <label htmlFor="joke-input">Joke:</label>
                <input id="joke-input" type="text" />
                <input type="submit" />
            </form>
        )
    }
}
