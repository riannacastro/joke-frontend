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
            <div className="flex box-border w-[400px] mt-10 bg-white p-4 rounded-lg">
            <form>
                <label>Search: </label>
                <input type="text" value={this.state.search} onChange={this.handleChange} placeholder="search..."/>
            </form>
            </div>
        )
    }
}
