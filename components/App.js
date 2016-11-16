/**
 * Created by rahul on 29/10/16.
 */
import React from 'react';

import AddTodo from './AddTodo';
import VisibleTodoList from './VisibleTodoList';
import Footer from './Footer';

const App = () => (
    <div>
        <AddTodo />
        <br/>
        <VisibleTodoList />
        <Footer />
    </div>
);

export default App;