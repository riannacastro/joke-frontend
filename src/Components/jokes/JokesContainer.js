import React from 'react'
import { connect } from 'react-redux'
import { setJokes } from '../../Redux/actions/jokeActions'
import JokeForm from './JokeForm'

class JokesContainer extends React.Component {

    componentDidMount() {
        this.props.dispatchSetJokes()
    }

    render(){
        return (
            <div>
              <h1>ALL JOKES</h1>
              < JokeForm />
              <div>
                  {this.props.jokes.map(j => <p key={j.id}>{j.joke}</p>)}
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