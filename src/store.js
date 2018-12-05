import { createStore, combineReducers } from 'redux'



const reducer1 = () =>({
    ala: "ma kota"
})

const reducer2 = () =>({
    ala: "ma kunołaza laotańskiego"
})

const rootReducer = combineReducers({
    reducer1,
    reducer2
})

export const store = createStore(
rootReducer
)

console.log(store)
console.log(store.getState())
console.log(rootReducer)