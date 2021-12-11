export const setComments = () => {
    return (dispatch) => {
        fetch("http://localhost:3000/comments")
        .then(r => r.json())
        .then(comments => dispatch({type: "SET_COMMENTS", payload:comments})) 
        //not working but console.log working shows array??
    }
}
