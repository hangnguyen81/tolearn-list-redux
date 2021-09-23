//action creator

export const addToList = (todoText) =>{
    return{
        type: 'todos/addToList', 
        payload: todoText
    }
}

export const toggleItem = (todoId) =>{
    return {
        type: 'todos/toggleItem', 
        payload: todoId
    }
}

export const selectColor = ({todoId, color}) =>{
    return {
        type: 'todos/colorSelected', 
        payload: {todoId, color}
    }
}

export const deleteItemFromList = (todoId) =>{
    return {
        type: 'todos/todoDeleted', 
        payload: todoId
    }
}

export const completeAll = () =>{
    return {
        type: 'todos/completeAll'
    }
}

export const clearCompletedItem = () =>{
    return {
        type: 'todos/clearCompletedItem'
    }
}

// initial state of todo list

const initialState = [
    { id: 0, text: 'Learn React', completed: true },
    { id: 1, text: 'Learn Redux', completed: false, color: 'red' },
    { id: 2, text: 'Build something fun!', completed: false, color: 'blue' }
  ]

function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
  }

export default function todosReducer(state = initialState, action) {
    switch (action.type) {
        case "todos/addToList":{
            return  [
                 ...state,
                {
                    id: nextTodoId(state),                    
                    text: action.payload,
                    completed: false
                }
            ]
        }
        case 'todos/toggleItem': {
            return state.map(todo => {
                    if (todo.id === action.payload) {
                        return {
                            ...todo,
                            completed: !todo.completed
                        }
                    }else return todo;                
                })           
            }
        case 'todos/colorSelected':
            return state.map(todo =>{
                if (todo.id === action.payload.todoId){
                    return{
                        ...todo,
                        color: action.payload.color
                    }
                }else return todo
            })
        case 'todos/todoDeleted':
            return state.filter(todo => todo.id !== action.payload)
        case 'todos/completeAll':
            return state.map(todo => {
                return {
                    ...todo,
                    completed: true
                }
            })
        case 'todos/clearCompletedItem':
            return state.filter(todo => todo.completed === false)
        default:
            return state
    }
  }