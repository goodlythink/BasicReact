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

const initialState = { isFailed: false, data: null }
function users(state = initialState, action) {
    switch (action.type) {
        case "LOAD_USERS":
            return { ...state, isFailed: false, data: action.payload }
        case "LOAD_USERS_FAILED":
            return { ...state, isFailed: true, data: action.payload }
        default:
            return state
    }
}

const initialAlbum = { isFailed: false, data: null }
function albums(state = initialAlbum, action) {
    switch (action.type) {
        case "LOAD_ALBUMS":
            return { ...state, isFailed: false, data: action.payload }
        case "LOAD_ALBUMS_FAILED":
            return { ...state, isFailed: true, data: action.payload }
        default:
            return state
    }
}

const reducer = combineReducers({
    counter: countLike,
    users,
    albums
})

export default reducer