function reducer(state = {jokes: []}, action) {
    switch (action.type) {
        case "SET_JOKES":

            return {
                ...state, 
                jokes: action.payload
            };

        default:
            return state;
    }
}

export default reducer;