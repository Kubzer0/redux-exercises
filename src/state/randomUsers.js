
const INITIAL_STATE = {
    users: [],
    isFetching: false,
    isError: false
}

const SET_USERS = 'randomUsers/SET_USERS'

const START_FETCHING = 'randomUsers/START_FETCHING'
const STOP_FETCHING = 'randomUsers/STOP_FETCHING'
const ERROR_FETCHING = 'randomUsers/ERROR_FETCHING'


const startFetchingAction = () => ({ type: START_FETCHING })
const stopFetchingAction = () => ({ type: STOP_FETCHING })
const errorFetchingAction = () => ({ type: ERROR_FETCHING })

export const fetchUsersAsyncAction = (url) => (dispatch, getState) => {
    dispatch(startFetchingAction())
    fetch(url)
        .then(r => r.json())
        .then(data => {
            dispatch(
                setUsers(data.results)
            )
            dispatch(stopFetchingAction())
        })
        .catch(() => {
            dispatch(errorFetchingAction())
        })
}

const setUsers = users => ({
    type: SET_USERS,
    users: users
})


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case SET_USERS:
            return {
                ...state,
                users: action.users
            }
        case START_FETCHING:
            return {
                ...state,
                isFetching: true,
                isError: false
            }
        case STOP_FETCHING:
            return {
                ...state,
                isFetching: false,
                isError: false
            }
        case ERROR_FETCHING:
            return {
                ...state,
                isFetching: false,
                isError: true
            }
        default:
            return state
    }
}
