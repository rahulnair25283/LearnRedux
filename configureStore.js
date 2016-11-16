/**
 * Created by rahul on 29/10/16.
 */
import { createStore } from 'redux';
import throttle from 'lodash/throttle'

import todoApp from './reducers/index';
import { loadState, saveState } from './localStorage';

const addLoggingToDispatch = (store) => {
    const rawDispatch = store.dispatch;

    if (!console.group) {
        return rawDispatch;
    }

    return (action) => {
        console.log(action.type);
        console.log('%c prev state', 'color: gray', store.getState());
        console.log('%c action', 'color: blue', action);
        const returnValue = store.dispatch(action);
        console.log('%c next state', 'color: green', store.getState());
        console.groupEnd(action.type);
        return returnValue;
    }
}

const configureStore = () => {
    const persistedState = loadState();
    const store = createStore(todoApp, persistedState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
    console.log(store.getState());

    // store.dispatch = addLoggingToDispatch(store);

    store.subscribe(throttle(() => {
        saveState({
            todos: store.getState().todos
        })
    }, 1000));

    return store;
}

export default configureStore;

