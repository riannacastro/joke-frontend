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
        this.setState({
            jokes: this.props.jokes.filter(j => j.joke.toLowerCase().includes(search.toLowerCase()))
        })
    }


    componentDidMount() {
        this.props.dispatchSetJokes() 
    }

    render(){
        return (
            <div className='flex-col mt-10'>
                <h1 className='text-[36px]'>ALL JOKES</h1>
                <div className='flex justify-center'>
                    <SearchBar handleSearch={this.handleSearch} /> <br />
                </div>
                <div className='joke-cont'>
                    {this.state.jokes.map(j => <JokeCard key={j.id} {...j} />)}
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        jokes: state.jokes
    }
};

function mapDispatchToProps(dispatch) {
    return {
        dispatchSetJokes: () => dispatch(setJokes())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(JokesContainer);