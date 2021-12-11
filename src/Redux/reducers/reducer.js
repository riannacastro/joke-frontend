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

        default:
            return state;
    }
}

export default reducer;