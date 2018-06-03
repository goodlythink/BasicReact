export const loadUsers = () => {
    return (dispatch) => {
        fetch('http://jsonplaceholder.typicode.com/users')
            .then(res => {
                if (res.ok) {
                    return res
                }
                throw Error(res.status)
            })
            .then(result => result.json())
            .then(data => {
                dispatch({
                    type: "LOAD_USERS",
                    payload: data
                })
            })
            .catch(e => dispatch({
                type: "LOAD_USERS_FAILED",
                payload: e.message
            }))
    }
}

export const loadAlbums = (userId) => {
    return (dispatch) => {
        fetch('http://jsonplaceholder.typicode.com/albums?userId=' + userId)
            .then(res => {
                if (res.ok) {
                    return res
                }
                throw Error(res.status)
            })
            .then(result => result.json())
            .then(data => {
                dispatch({
                    type: "LOAD_ALBUMS",
                    payload: data
                })
            })
            .catch(e => dispatch({
                type: "LOAD_ALBUMS_FAILED",
                payload: e.message
            }))
    }
}