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
        // const searchInput = search.length !== 0
        // const filterJokes = this.state.jokes.filter(j => j.joke.toLowerCase().includes(search.toLowerCase()))
        // if (search.length > 0)
         this.setState({
            jokes: this.props.jokes.filter(j => j.joke.toLowerCase().includes(search.toLowerCase()))
        })
        
        // return this.state
        // return this.state.jokes.map(joke => <JokeCard joke={joke} />)
    }


    componentDidMount() {
        this.props.dispatchSetJokes() 
    }

    render(){
        // if (this.state) {
        //     return (
        //         {this.props.jokes.map(j => <JokeCard key={j.id} {...j} />)}
        //     )
        // }
        // const all = this.props.jokes
        // const filter = this.state.jokes
        return (
            <div>
              <h1>ALL JOKES</h1>
              < SearchBar handleSearch={this.handleSearch} /> <br />
              {/* <div>
                {filter
                    ? filter.map(f => <JokeCard key={f.id} {...f} />)
                    : all.map(j => <JokeCard key={j.id} {...j} />)
                }
              </div> */}
              <div >
                  {this.state.jokes.map(j => <JokeCard key={j.id} {...j} />)}
                  {/* <h2>search results: {this.state.jokes.map(filter => <JokeCard key={filter.id} {...filter} />)}</h2> */}
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