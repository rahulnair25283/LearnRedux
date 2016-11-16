/**
 * Created by rahul on 29/10/16.
 */
import { v4 } from 'node-uuid';

export const addTodo = (text) => ({
    type: 'ADD_TODO',
    id: v4(),
    text
})

export const toggleTodo = (id) => ({
    type: 'TOGGLE_TODO',
    id
})
