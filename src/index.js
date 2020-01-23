import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './Ch1.css';
import App from './App';
import Contribute from './Contribute';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
const INITIAL_STATE = { loading: false, error: false, item: [], recipe_clicked: false, item_clicked: false, submit: false };
export const stateChange = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'CLICK_RECIPE':
            return {
                loading: false,
                error: false,
                item: [],
                recipe_clicked: true,
                item_clicked: false,
                submit: false,
                fetch:false
            };
        case 'CLICK_ITEM':
            return {
                loading: false,
                error: false,
                item: [],
                recipe_clicked: false,
                item_clicked: true,
                submit: false,
                fetch:true
            };
        case 'HOME_PAGE':
            return {
                loading: false,
                error: false,
                item: [],
                recipe_clicked: false,
                item_clicked: false,
                submit: false,
                fetch:false
            };
        case 'DATA_SUBMIT':
            return {
                loading: false,
                error: false,
                item: [],
                recipe_clicked: false,
                item_clicked: false,
                submit: true,
                fetch:false
            };
        default:
            return INITIAL_STATE;
    }
}
export const store = createStore(stateChange);



const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

// Initialize Cloud Firestore through Firebase
firebase.initializeApp({
    apiKey: 'AIzaSyAuhx_oN7m3wDfjp9wkFLDkFpMJqmvaOGA',
    authDomain: "cookbook-dc1e1.firebaseapp.com",
    projectId: 'cookbook-dc1e1',
    databaseURL: "https://cookbook-dc1e1.firebaseio.com"
});

/*
const fetchData = async () => {
    const recipesSnap = await firebase.firestore().collection('recipes').get();
    const recipes = recipesSnap.docs.map(recipeDoc => ({ uid: recipeDoc.id, ...recipeDoc.data() }));
    debugger;
}*/
const fetchData = async () => {
    const recipesSnap = await firebase.firestore().collection('recipes').get();
    const recipes = recipesSnap.docs.map(rec => ({ name: rec.name, image: rec.image, ingredients: rec.ingredients, ...rec.data() }));
}



/*fetchData();*/



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById('root'));

/*// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();*/
