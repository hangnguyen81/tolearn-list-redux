import { useSelector, useDispatch } from "react-redux";
import { completeAll,clearCompletedItem } from "../features/todos/todosSlice";
import { availableColors, capitalize } from '../features/filters/colors';


const TodoRemain  = ({count}) =>{
    const suffix = count.length <=1?'':'s';
    return(
        <div className='todo-remain'>
            <h4>Remaining Tolearn</h4>
            <p>{count.length} item{suffix} left</p>
        </div>
    )
}

const ColorsFilter = () =>{
  const colorList = availableColors.map(color =>{
    return(
      <div key={color}>
        <input type = 'checkbox'/> 
        <span className='color-block' style={{backgroundColor:color, color:color}}>'  '</span> 
        {' ' + capitalize(color)}
      </div>
    )
  })
  return (
    <div className='todo-filter-by-color'>
      <h4>Filter by Color</h4>
      {colorList}
  </div>
  )
}


const Footer = () =>{
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()

    const remainTodos = todos.filter(todo => todo.completed === false)
    const handleMarkAll = () => dispatch(completeAll())
    const handleClearCompleted = () => dispatch(clearCompletedItem())

    return(
        <>
        <hr/>
        <div className='todo-footer'>
            <div className='todo-actions'>
                <h4>Actions</h4>
                <button className='btn' onClick={handleMarkAll}> Mark All Completed</button>
                <button className='btn' onClick={handleClearCompleted}> Clear Completed</button>
            </div>
            <TodoRemain count={remainTodos}/>
            <div className='todo-filter-by-status'>
                <h4>Filter by Status</h4>
                <button className='btn btn-light' value='All'> All</button>
                <button className='btn btn-light' value='Active'> Active</button>
                <button className='btn btn-light' value='Completed'> Completed</button>
            </div>
            <ColorsFilter />
        </div>
        </>
    )
}

export default Footer;