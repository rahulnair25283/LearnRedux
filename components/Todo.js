/**
 * Created by rahul on 29/10/16.
 */
import React from 'react';

const Todo = ({
    todo,
    onClick
}) => {
    return (
        <li onClick={onClick}
            style={{
                textDecoration: todo.completed ?
                    'line-through' :
                    'none'
            }}
        >
            {todo.text}
        </li>
    );
}
export default Todo;
