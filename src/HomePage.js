import React from 'react';
import ReactDOM from 'react-dom';
import './Ch1.css';
import clock from './clock_svg.svg';
import App from './App.js';
import TaskBar from './TaskBar.jsx';
import RecipeList from './RecipeList.jsx';
import RecipeTab from './RecipeTab.jsx'
import RecipeTitle from './RecipeTitle.jsx';
import Advertisements from './Advertisements.jsx';
import RecipeDetails from './RecipeDetails.jsx';
import SignIn from './SignIn.jsx';
import all_recipes from './recipes.js';
import ad from './advertisements.js';
import RecipeListPage from './RecipeListPage';
import { fetchData, fetchAdData } from './Api';
import { store } from './index';

function HomePage({ history }) {
    const [isOpen, setisOpen] = React.useState(false);
    const [selectedItem, setSelectedItem] = React.useState(null);
    const [isRecipeClicked, setisRecipeClicked] = React.useState(false);
    const [isLogIn, setisLogIn] = React.useState(false);
    const [adv, setAdv] = React.useState([]);
    React.useEffect(() => {
        fetchAdData().then(a => setAdv(a));
    }, []);
    const ads = adv;
    console.log(ads);

    /*React.useEffect(() => {
        fetchData();
    }, []);*/

    const HandleClick = (item) => {
        console.log(item)
        setisOpen(true)
        setSelectedItem(item)
    }

    const CloseItem = () => {
        setisOpen(false)
        console.log(setisOpen)
    }
    const CloseRecipe = () => {
        setisRecipeClicked(false)
    }
    const CloseSignIn = () => {

        setisOpen(false)
        setisRecipeClicked(false)
    }
    const HandleRecipe = () => {
        setisRecipeClicked(true)
    }
    const HandlefClick = (item) => {
        console.log(item)
        setisOpen(true)
        setSelectedItem(item)
        setisRecipeClicked(false)
    }
    store.dispatch({ type: "HOME_PAGE" });

    console.log(store.getState());

    return (
        <div>
            <TaskBar
                recipeClicked={HandleRecipe}
                closeFrame={CloseItem}

            />
            <div style={{ marginTop: 100 }}>

                <Advertisements
                    items={ads}
                />

                <RecipeListPage
                    history={history}
                />
                <RecipeTab
                    open={isRecipeClicked}
                    closeFrame={CloseRecipe}
                    items_a={all_recipes}
                    isClicked_a={HandlefClick}
                />


            </div>
        </div>
    );


}

export default HomePage;