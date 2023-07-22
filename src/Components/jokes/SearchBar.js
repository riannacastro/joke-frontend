import React from "react";

export default class SearchBar extends React.Component {

    state = {
        search: ""
    };

    handleChange = (e) => {
        e.preventDefault();
        this.setState({search: e.target.value}, () => {
            this.props.handleSearch(this.state.search)
        });
    };

    render() {
       return (
        <div className="flex box-border w-[400px] mt-10 bg-white p-4 rounded-lg">
            <form>
                <label>Search: </label>
                <input className="w-[300px]" type="text" value={this.state.search} onChange={this.handleChange} placeholder="search..."/>
            </form>
        </div>
       )
    }
}