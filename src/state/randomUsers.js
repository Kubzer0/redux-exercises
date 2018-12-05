
const INITIAL_STATE = {
    users: []
}

const SET_USERS = 'randomUsers/SET_USERS'




export const fetchUsersAsyncAction = () => (dispatch, getState) => {
    fetch('https://randomuser.me/api')
        .then(r => r.json())
        .then(data => {
            dispatch(
                setUsers(data.results)
            )
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
        default:
            return state
    }
}
