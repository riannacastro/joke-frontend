export const setJokes = () => {
    return (dispatch) => {
        fetch("https://v2.jokeapi.dev/joke/Programming,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&amount=10")
        .then(r => r.json())
        .then(jokes => dispatch({type: "SET_JOKES", payload:jokes.jokes}))  
    }
}
// fetch might need to be localhost 
export const addJoke = (joke) => {
    return (dispatch) => {
        fetch("https://v2.jokeapi.dev/joke/Programming,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&amount=10", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(joke)
        })
        .then(r => r.json())
        .then(data => dispatch({type: "ADD_JOKE", payload: data}))
    }
}