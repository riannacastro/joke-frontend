function reducer(state = {jokes: [], requests: []}, action) {
    switch (action.type) {
        case "SET_JOKES":

            return {
                ...state, 
                jokes: action.payload
            };

        case "ADD_JOKE":

            return {
                ...state,
                jokes: [...state.jokes, action.payload]
            }

        case "DELETE_JOKE":

            const jokeId = state.jokes.filter(j => j.id !== action.payload)

            return {
                ...state,
                jokes: jokeId
            }

        case "SET_REQUESTS":

            return {
                ...state, 
                requests: action.payload
            };

        default:
            return state;
    }
}

export default reducer;