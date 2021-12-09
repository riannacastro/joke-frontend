import React from 'react'
import { connect } from 'react-redux'
import { setJokes } from './../../Redux/jokeActions'

class JokesContainer extends React.Component {

    componentDidMount() {
        fetch("https://v2.jokeapi.dev/joke/Programming,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&amount=10")
        .then(r => r.json())
        .then(data => this.props.dispatchSetJokes(data))
    }

    render(){
        return (
            <div>
              <h1>ALL JOKES</h1>
         </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return {
        dispatchSetJokes: (jokes) => dispatch(setJokes(jokes))
    }
}

export default connect(null, mapDispatchToProps)(JokesContainer)