import React from 'react';
import RecipeList from './RecipeList.jsx';
import all_recipes from './recipes';
import RecipeTitle from './RecipeTitle.jsx';
import TaskBar from './TaskBar.jsx';
import SignIn from './SignIn';
export default function RecipeListPage() {
    return (
        <div>
            <TaskBar />
            <div
                style={{
                    marginTop: 100
                }}>
                <RecipeTitle />
                <SignIn />
            </div>
        </div>
    )
}