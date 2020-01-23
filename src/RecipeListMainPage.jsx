import React from 'react';
import RecipeListPage from './RecipeListPage';
import TaskBar from './TaskBar';
import { connect } from 'react-redux';
import { store } from './index.js';

export default function RecipeListMainPage({ history }) {
    store.dispatch({ type: "CLICK_RECIPE" });
    console.log(store.getState());
    return (

        <div>
            <TaskBar />
            <RecipeListPage
                history={history} />

        </div>
    )
}
