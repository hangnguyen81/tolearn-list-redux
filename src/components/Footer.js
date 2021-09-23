import { useSelector, useDispatch } from "react-redux";
import {StatusFilters, 
        changeStatusFilter,
        changeColorFilter} from '../features/filters/filtersSlice';
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
/*
const StatusFilter = ({ value: status, onChange }) => {
    const renderedFilters = Object.keys(StatusFilters).map((key) => {
      const value = StatusFilters[key]
      const handleClick = () => onChange(value)
      const className = value === status ? 'selected' : ''
  
      return (
        <li key={value}>
          <button className={`btn btn-light ${className}`} onClick={handleClick}>
            {key}
          </button>
        </li>
      )
    })
  
    return (
        <div className='todo-filter-by-status'>
            <h4>Filter by Status</h4>
            <ul>{renderedFilters}</ul>
      </div>
    )
  }
*/

const Footer = () =>{
    const todos = useSelector(state => state.todos)
    const dispatch = useDispatch()
    //const { status, colors } = useSelector((state) => state.filters)

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
            </div>
            {/* <StatusFilter value={status} onChange={onStatusChange} /> */}
            <ColorsFilter />
        </div>
        </>
    )
}

export default Footer;