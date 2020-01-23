import React from 'react';
import RecipeList from './RecipeList.jsx';
import all_recipes from './recipes';
import RecipeTitle from './RecipeTitle.jsx';
import TaskBar from './TaskBar.jsx';

export default function RecipeListPage({ history }) {
    const [selectedItem, setSelectedItem] = React.useState(null);
    const HandleClick = (item) => {
        console.log(item);
        setSelectedItem(item);
        history.push(`/recipe?uid=${item.uid}`);
    }

    return (
        <div>
            <div
                style={{
                    marginTop: 100
                }}>
                <RecipeTitle />
                <RecipeList
                    items={all_recipes}
                    isClicked={HandleClick} />
            </div>
        </div>
    )
}