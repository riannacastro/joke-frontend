import React from 'react'
import { connect } from 'react-redux'
import { setJokes } from '../../Redux/actions/jokeActions'
import JokeCard from './JokeCard'
import SearchBar from './SearchBar'


class JokesContainer extends React.Component {

    state = {
        jokes: this.props.jokes
    }

    handleSearch = (search) => {
        console.log(search)
        // const filterJokes = this.state.jokes.filter(j => j.joke.toLowerCase().includes(search.toLowerCase()))
        this.setState({
            jokes: this.state.jokes.filter(j => j.joke.toLowerCase().includes(search.toLowerCase()))
            // state.jokes.filter(j => j.includes.toLowerCase())
        })
        // return this.state.jokes.map(joke => <JokeCard joke={joke} />)
    }


    componentDidMount() {
        this.props.dispatchSetJokes() 
    }

    render(){
        return (
            <div>
              <h1>ALL JOKES</h1>
              <div className="joke-cont">
                  {this.props.jokes.map(j => <JokeCard key={j.id} {...j} />)}
                  < SearchBar handleSearch={this.handleSearch} />
                  {/* {filteredJokes={this.state}} */}
              </div>
         </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        jokes: state.jokes
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchSetJokes: () => dispatch(setJokes())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(JokesContainer)

// form allows user seach
// handleChange
// filter