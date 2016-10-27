/**
 * Created by rahul on 27/10/16.
 */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import todoApp from './todo.reducer';

// -------------- ADD TODO ----------------
let nextTodoId = 0;

const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
}

let AddTodo = ({ dispatch }) => {
    let input;
    return (
        <div>
            <input ref={node => {
                input = node;
            }}/>
            <button
                onClick={() => {
                    dispatch(addTodo(input.value));
                    input.value = '';
                }}>Add Todo</button>
        </div>
    );
}
AddTodo = connect()(AddTodo);

// -------------- SHOW VISIBLE TODOS ----------------

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

const getVisibleTodos = (todos, filter) => {
    switch(filter) {
        case 'SHOW_ALL':
            return todos;
        case 'SHOW_ACTIVE':
            return todos.filter(todo => !todo.completed);
        case 'SHOW_COMPLETED':
            return todos.filter(todo => todo.completed);
    }
}

const mapStateToTodoListProps = (state) => {
    return {
        todos: getVisibleTodos(state.todos, state.visibilityFilter)
    };
}

const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

const mapDispatchToTodoListProps = (dispatch) => {
    return {
        onTodoClick: (id) => {
            dispatch(toggleTodo(id));
        }
    }
}

const VisibleTodos = connect(
    mapStateToTodoListProps,
    mapDispatchToTodoListProps
)(TodoList);

// -------------- VISIBILITY FILTERS ----------------
const Link = ({
    active,
    children,
    onClick
}) => {
    if (active) {
        return <span>{children}</span>
    }
    return (
        <a href="#" onClick={e => {
            e.preventDefault();
            onClick();
        }}>{children}</a>
    );
}

const mapStateToFilterLinkProps = (state, ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    };
}

const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}

const mapDispatchToFilterLinkProps = (dispatch, ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter));
        }
    };
}

const FilterLink = connect(
    mapStateToFilterLinkProps,
    mapDispatchToFilterLinkProps
)(Link);

const Footer = () => {
    return (
        <div>
            Show:
            <FilterLink filter='SHOW_ALL'>All</FilterLink>
            {' '}
            <FilterLink filter='SHOW_ACTIVE'>Active</FilterLink>
            {' '}
            <FilterLink filter='SHOW_COMPLETED'>Completed</FilterLink>
        </div>
    );
}

// -------------- MAIN CONTAINER COMPONENT ----------------

const TodoApp = () => (
    <div>
        <AddTodo />
        <br/>
        <VisibleTodos />
        <Footer />
    </div>
);

const { createStore} = Redux;

ReactDOM.render(
    <Provider
        store = {
            createStore(todoApp, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
        }
    >
        <TodoApp/>
    </Provider>,
    document.getElementById('root')
);

