import React from 'react'
import { deleteJoke } from '../../Redux/actions/jokeActions';
import { connect } from 'react-redux';

function JokeCard({joke}) {
    function handleDelete() {

    }

    return (
        <div>
            <p>{joke}</p><button onClick={handleDelete}>delete</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    dispatchDeleteJoke: (id) => dispatch(deleteJoke(id))
})

export default connect(null, mapDispatchToProps)(JokeCard)