import React from "react";

export default class SearchBar extends React.Component {

    state = {
        search: ""
    }

    handleChange = (e) => {
        e.preventDefault()
        this.setState({search: e.target.value}, () => {
            this.props.handleSearch(this.state.search)
        });
        // this.props.handleSearch(this.state.search)
        // this.props.handleSearch(this.state)
        // this.props.handleSearch(this.state)
        
        // get the value and use it to change state in JokesContainer
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