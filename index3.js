/**
 * Created by rahul on 25/10/16.
 */
const toggleTodo = (todo) => {
    return Object.assign({}, todo, {
        completed: !todo.completed
    });
}

const testToggleTodo = () => {
    const todoBefore = {
        id: 0,
        text: 'learn redux',
        completed: false
    }

    const todoAfter = {
        id: 0,
        text: 'learn redux',
        completed: true
    }

    deepFreeze(todoBefore);

    expect(toggleTodo(todoBefore)).toEqual(todoAfter);
}

testToggleTodo();
console.log('all tests passed!');