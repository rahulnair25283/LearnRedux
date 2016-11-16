/**
 * Created by rahul on 29/10/16.
 */
import React from 'react';

import Todo from './Todo';

const TodoList = ({
    todos,
    onTodoClick
}) => {
    return (
        <ul>
            {todos.map(t =>
                <Todo key={t.id}
                      todo={t}
                      onClick={
                          () => onTodoClick(t.id)
                      }
                />
            )}
        </ul>
    );
}

export default TodoList;