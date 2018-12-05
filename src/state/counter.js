const INITIAL_STATE = {
    number: 0
}

const INC = "counter/INC"
const DEC = "counter/DEC"
const RESET = "counter/RESET"

export const increment = () => ({
    type: INC,
})

export const decrement = () => ({
    type: DEC,
})


export const reset = () => ({
    type: RESET,
})


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INC:
            return ({
                ...state,
                number: state.number + 1
            })
        case DEC:
            return ({
                ...state,
                number: state.number - 1
            })
        case RESET:
            return ({
                number: 0
            })
        default:
            return state
    }
}