/**
 * Created by rahul on 29/10/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router'

import { toggleTodo } from '../actions/index';
import TodoList from './TodoList';
import { getVisibleTodos } from '../reducers/index';

const mapStateToTodoListProps = (state, { params }) => {
    return {
        todos: getVisibleTodos(state, params.filter || 'all')
    };
}

const VisibleTodoList = withRouter(connect(
    mapStateToTodoListProps,
    {
        onTodoClick: toggleTodo
    }
)(TodoList));

export default VisibleTodoList;