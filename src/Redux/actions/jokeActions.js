export const setJokes = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/jokes")
        .then(r => r.json())
        .then(jokes => dispatch({type: "SET_JOKES", payload:jokes}))  
    }
}

export const addJoke = (joke) => {
    return (dispatch) => {
        fetch("http://localhost:3000/jokes", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(joke)
        })
        .then(r => r.json())
        .then(joke => dispatch({type: "ADD_JOKE", payload: joke}))
    }
}
