import React from 'react'
import TodoListItem from './TodoListItem';
import PropTypes from 'prop-types';

const TodoList = ({ todos, handleDelete, handleToggle }) => {
    console.log(todos);
    return (
        <ul className='list-group list-group-flush'>
            {   
                todos.map( (todo, i) => (
                        
                            <TodoListItem
                                key={ todo.id }
                                todo={ todo }
                                handleDelete={ handleDelete }
                                handleToggle={ handleToggle }
                                i={ i }
                            />
                ))
            }
        </ul>
    )
}

TodoList.propTypes = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleToggle: PropTypes.func.isRequired
};

export default TodoList;
