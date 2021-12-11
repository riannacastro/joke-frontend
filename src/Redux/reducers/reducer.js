function reducer(state = {jokes: []}, action) {
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

        default:
            return state;
    }
}

export default reducer;