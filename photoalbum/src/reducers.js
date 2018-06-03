import { combineReducers } from 'redux'

//reducer
function countLike(state = 0, action) {
    switch (action.type) {
        case "LIKE":
            return state + 1
        case "DISLIKE":
            return state - 1
        default:
            return state
    }
}

function users(state = {}, action) {
    switch (action.type) {
        case "LOAD_USERS":
            return action.payload
        default:
            return state
    }
}

const reducer = combineReducers({
    counter: countLike,
    users
})

export default reducer