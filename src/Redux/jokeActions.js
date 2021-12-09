export const setJokes = () => {
    return (dispatch) => {
        fetch("https://v2.jokeapi.dev/joke/Programming,Christmas?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single&amount=10")
        .then(r => r.json())
        .then(jokes => dispatch({type: "SET_JOKES", payload:jokes.jokes}))  
    }
}
