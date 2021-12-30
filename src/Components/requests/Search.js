import React, { Component } from 'react'

export default class Search extends Component {

    state = {
        search: ""
    }

    handleChange = (e) => {
        e.preventDefault();
        this.setState({search: e.target.value}, () => {
            this.props.handleRequests(this.state.search)
        })
    }


    render() {
        return (
            <div>
            <form>
                <label>Search: </label>
                <input type="text" value={this.state.search} onChange={this.handleChange} placeholder="search..."/>
            </form>
            </div>
        )
    }
}
