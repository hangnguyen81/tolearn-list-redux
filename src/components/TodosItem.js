import { useSelector, useDispatch, shallowEqual } from "react-redux"
import {toggleItem, selectColor, deleteItemFromList} from '../features/todos/todosSlice'
import { availableColors, capitalize } from '../features/filters/colors'

const selectTodoById = (state, todoId) => {
    return state.todos.find(todo => todo.id === todoId)
  }


const TodosItem = ({id}) =>{
    const todo = useSelector(state => selectTodoById(state, id),shallowEqual)
    const { text, completed, color } = todo

    const dispatch = useDispatch()

    const handleCompletedChanged = () => dispatch(toggleItem(id))
    const handleSelectColor = (e) =>dispatch(selectColor({todoId:id,color:e.target.value}))
    const deleteItem = () => dispatch(deleteItemFromList(id))

    return(
        <div className='todo-item'>
            <input className='checkbox-round'
                type='checkbox'
                checked={completed}
                onChange={handleCompletedChanged}
            />
            <p style={{color:color}}>{text}</p>
            <select className='select-color' value={color} onChange={handleSelectColor}>
                <option>Select color</option>
                {availableColors.map(color =>{ 
                    return <option value={color} key={color}>
                                {capitalize(color)}
                            </option>
                    })
            }
            </select>
            <button className='btn-delete' onClick={deleteItem}>X</button>
        </div>
    )
}

export default TodosItem