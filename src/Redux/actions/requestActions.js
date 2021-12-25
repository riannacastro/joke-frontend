export const setRequests = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/requests")
        .then(r => r.json())
        .then(requests => dispatch({type: "SET_REQUESTS", payload: requests}))  
    }
}

export const addRequest = (request) => {
    return (dispatch) => {
        fetch("http://localhost:3000/requests", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({request})
        })
        .then(r => r.json())
        .then(data => dispatch({type: "ADD_REQUEST", payload: data})

        )
    }
}