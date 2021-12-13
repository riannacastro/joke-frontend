import React from 'react'
import { deleteJoke } from '../../Redux/actions/jokeActions';
import { connect } from 'react-redux';

function JokeCard(props) {
    function handleDelete() {
        props.dispatchDeleteJoke(props.id)
    }

    return (
        <div key={props.id} className="joke-card">
            {props.joke} <br />
            <button id="delete-btn" onClick={handleDelete}>delete</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    dispatchDeleteJoke: (id) => dispatch(deleteJoke(id))
})

export default connect(null, mapDispatchToProps)(JokeCard)