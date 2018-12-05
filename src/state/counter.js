const INITIAL_STATE = {
    number: 0
}

const INC = "counter/INC"
const DEC = "counter/DEC"

export const increment = () => ({
    type: INC,
})

export const decrement = () => ({
    type: DEC,
})


export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INC:
            return ({
                number: state.number + 1
            })
        case DEC:
            return ({
                number: state.number - 1
            })
        default:
            return state
    }
}