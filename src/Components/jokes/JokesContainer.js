import React from 'react'
import { connect } from 'react-redux'
import { setJokes } from '../../Redux/actions/jokeActions'
import JokeCard from './JokeCard'
import JokeForm from './JokeForm'

class JokesContainer extends React.Component {

    componentDidMount() {
        this.props.dispatchSetJokes()
    }

    render(){
        return (
            <div>
              <h1>ALL JOKES</h1>
              <div>
                  {this.props.jokes.map(j => <JokeCard key={j.id} {...j} />)}
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