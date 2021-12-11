function commentReducer(state = {comments: []}, action) {
    switch (action.type) {
        case "SET_COMMENTS":

            return {
                ...state, 
                comments: action.payload
            };

        
        default:
            return state;
    }
}

export default commentReducer;