import React from 'react';
import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import RecipeDetails from './RecipeDetails';
import HomePage from './HomePage';
import RecipeList from './RecipeList';
import RecipeListPage from './RecipeListPage';
import SignInPage from './SignInPage';
import RecipeListMainPage from './RecipeListMainPage';
import ContributePage from './ContributePage';
function Main() {
  return (
    <Router>
      <Switch>
        <Route path="/recipe" component={RecipeDetails} />
        <Route path="/list" component={RecipeListMainPage} />
        <Route path="/contribute" component={ContributePage}/>
        <Route path="/signin">
          <SignInPage />
        </Route>
        <Route path="/" component={HomePage}/>


      </Switch>
    </Router>
  );
}

export default Main;
