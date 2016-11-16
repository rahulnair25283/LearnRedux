/**
 * Created by rahul on 29/10/16.
 */
import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/index';

const AddTodo = ({ dispatch }) => {
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
export default connect()(AddTodo);