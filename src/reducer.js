import {combineReducers} from 'redux'
import todosReducer from "./features/todos/todosSlice"
import filtersReducer from "./features/filters/filtersSlice"

const rootReducers= combineReducers({
    todos: todosReducer,
    filter: filtersReducer
})

export default rootReducers

