/**
 * Created by rahul on 27/10/16.
 */
import { combineReducers } from 'redux';

import todos, * as fromTodo from './todos';

const todoApp = combineReducers({
    todos
});

export default todoApp;

export const getVisibleTodos = (state, filter) => (
    fromTodo.getVisibleTodos(state.todos, filter)
)