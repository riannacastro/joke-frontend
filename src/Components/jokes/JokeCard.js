import React from 'react'
import { deleteJoke } from '../../Redux/actions/jokeActions';
import { connect } from 'react-redux';

function JokeCard(props) {
    // function handleDelete() {
    //     props.dispatchDeleteJoke(props.id)
    // };

    return (
        <div key={props.id} className="joke-card relative">
            {props.joke} <br />
            {/* <button id="delete-btn" className='absolute top-8' onClick={handleDelete}>delete</button> */}
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    dispatchDeleteJoke: (id) => dispatch(deleteJoke(id))
});

export default connect(null, mapDispatchToProps)(JokeCard);