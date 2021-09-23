import { useState } from "react"
import { useDispatch } from "react-redux"
import { addToList} from "../features/todos/todosSlice"

const Header = () =>{
    const [todoInput, setTodoInput] = useState('')
    const dispatch = useDispatch()

    const handleChange = e =>setTodoInput(e.target.value)
    const handleKeyDown = e => {
        const trimmedText = e.target.value.trim()
        if (e.key === 'Enter' && trimmedText) {
          dispatch(addToList(trimmedText))
          setTodoInput('')
        }
      }
    
    return(
        <div className='todo-header'>
            <h1>Your TO-LEARN list</h1>
            <p>App created with React and Redux @Hang Nguyen - 2021 </p>         
            <input className='todo-input'
                type='text'
                value={todoInput}
                onChange = {handleChange}
                onKeyDown={handleKeyDown}
                placeholder='What should I learn next?'
            />
        </div>
    )
}

export default Header