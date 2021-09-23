import { useSelector } from "react-redux";
import TodosItem from "./TodosItem";

const TodosList = () =>{
    const todoIds = useSelector(state => state.todos.map(todo =>todo.id))

    const renderTodosList = todoIds.map(todoId =>{
        return <TodosItem key={todoId} id={todoId}/>
    })
    return(
        <div className='todo-list'>
            {renderTodosList}
        </div>
    )
}

export default TodosList;