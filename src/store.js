import { createStore, combineReducers } from 'redux'


import counter from './state/counter'

const rootReducer = combineReducers({
    counter
})

export const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

console.log(store)
console.log(store.getState())
console.log(rootReducer)