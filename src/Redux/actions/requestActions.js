export const setRequests = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/requests")
        .then(r => r.json())
        .then(requests => dispatch({type: "SET_REQUESTS", payload: requests}))  
    }
}