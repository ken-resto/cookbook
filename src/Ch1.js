import React from 'react';
import ReactDOM from 'react-dom';
import './Ch1.css';
import break3 from './break3.png';
import sugar from './sugar1.png';
import instpot from './instpot.jpg';
import skillet from './skillet.jpg';
import sheetpan from './sheetpan.jpg';
import thm from './30min.jpg';
import slowck from './slowck.jpg';
import game from './game.jpg';
import vegan from './vegan.jpg';
import healthy from './healthy.jpg';
import keto from './keto.jpg';
import mac from './mac.jpg';
import lwraps from './lwraps.jpg';
import App from './App.js';
import TaskBar from './TaskBar.jsx';
import RecipeList from './RecipeList.jsx';

const recipes_col1 = [
  {
    name: 'Chicken Pot Roast',
    image: instpot,
  },
  {
    name: 'Vegan Skillet',
    image: skillet,
  },
  {
    name: 'Chicken Parmesan',
    image: keto
  }

];
const recipes_col2 = [
  {
    name: 'Zucchini Shrimp Alfredo',
    image: thm,
  },
  {
    name: 'Sesame Asparagus',
    image: vegan,
  },
  {
    name: 'Game-Day Queso',
    image: game
  }

];
const recipes_col3 = [
  {
    name: 'Pulled Chicken & Greens',
    image: slowck,
  },
  {
    name: "Keto Mac'n'Cheese",
    image: mac,
  },
  {
    name: 'Teriyaki Lettuce Wraps',
    image: lwraps
  }

];

const all_recipes = [...recipes_col1, ...recipes_col2, ...recipes_col3];





function Advertisement1() {
  return (
    <div className="home_pic_container1">
      <img style={{ height: 450 }} className="rounded_pic" src={break3} />
      <div className="fif_br_mes">
      </div>
      <div className="fif_br_mes_text">
        50 Breakfast Recipes
        </div>
    </div>
  )
}

function Advertisement2() {
  return (
    <div className="home_pic_container2">
      <div className="home_pic_container2_pic">
        <img style={{ height: 450 }} className="sugar_rounded_pic" src={sugar} />
      </div>
      <div className="home_pic_container2_desc">
        <div className="home_pic_container2_desc_text">
          Craving Sugar ?
          Here's What to Reach for Instead
           </div>
      </div>
    </div>
  )
}
function RecipeTitle() {
  return (
    <div className="recipe_section_title">
      Recipes
      </div>
  )
}

function RecipeDetail({ handleClose, open, recipe }) {
  if (!recipe){

  return null;
  }

  return (
    <div
      style={{
        display: open ? 'inherit' : 'none',
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "white"
      }}>
      <button
        style={{
          fontSize: "3rem",
          position: "fixed",
          top: 5,
          right: 5
        }}
        onClick={handleClose}
      >X</button>
      <p style={{ fontSize: "2rem" }}>Name: {recipe.name}</p>
    </div>
  );
}

function Ch1() {
  const [isDetailsOpen, setIsDetailsOpen] = React.useState(false);
  const [selectedRecipe, setSelectedRecipe] = React.useState(null);

  const handleItemClick = (item) => {
    console.log("handleItemClick: ", item);
    setSelectedRecipe(item);
    setIsDetailsOpen(true);
  }

  const doClose = () => {
    setIsDetailsOpen(false);
  }

  return (
    <div>
      <TaskBar />
      <Advertisement1 />
      <Advertisement2 />
      <RecipeTitle />
      <RecipeList
        onItemClick={handleItemClick}
        items={all_recipes}
        style={{
          marginTop: 1300,
          marginLeft: 139
        }}
      />
      <RecipeDetail
        handleClose={doClose}
        open={isDetailsOpen}
        recipe={selectedRecipe}
      />

      {/* <RecipeList
          items={recipes_col2}
          style={{
            marginTop: 1300,
            marginLeft: 146
          }}
        />
        <RecipeList
          items={recipes_col3}
          style={{
            marginTop: 1300,
            marginLeft: 146
          }}
        /> */}


    </div>
  );

  // return (
  //   <div class Name="home_scroll_1_container">

  //     <div className="home_pic_container1">
  //       <img className="rounded_pic" src={break3}/>
  //       <div className="fif_br_mes">
  //       </div>
  //       <div className="fif_br_mes_text">
  //         50 Breakfast Recipes
  //       </div>
  //     </div>
  //     <div className="home_pic_container2">
  //       <div className="home_pic_container2_pic">
  //         <img className="sugar_rounded_pic" src={sugar}/>
  //       </div>
  //       <div className="home_pic_container2_desc">
  //         <div className="home_pic_container2_desc_text">
  //           Craving Sugar ?
  //           Here's What to Reach for Instead  
  //         </div>
  //       </div>
  //     </div>
  //     <div className="recipe_section_title">
  //       Recipes
  //     </div>
  //     <div className="recipe_container_1">
  //       <div className="recipe_pic_container">
  //         <img src={instpot}/>
  //       </div>
  //       <div className="recipe_text_container">
  //         <div className="recipe_text_field">
  //           Instant Pot Recipes
  //         </div>
  //       </div>
  //     </div>
  //     <div className="recipe_container_2">
  //       <div className="recipe_pic_container">
  //         <img src={skillet}/>
  //       </div>
  //       <div className="recipe_text_container">
  //         <div className="recipe_text_field">
  //           Easy Skillet Dinners
  //         </div>
  //       </div>
  //     </div>
  //     <div className="recipe_container_3">
  //       <div className="recipe_pic_container">
  //         <img src={sheetpan}/>
  //       </div>
  //       <div className="recipe_text_container">
  //         <div className="recipe_text_field">
  //           Sheet Pan Recipes
  //         </div>
  //       </div>
  //     </div>
  //     <div className="recipe_container_4">
  //       <div className="recipe_pic_container">
  //         <img src={thm}/>
  //       </div>
  //       <div className="recipe_text_container">
  //         <div className="recipe_text_field">
  //           Ready in 30 minutes
  //         </div>
  //       </div>
  //     </div>
  //     <div className="recipe_container_5">
  //       <div className="recipe_pic_container">
  //         <img src={slowck}/>
  //       </div>
  //       <div className="recipe_text_container">
  //         <div className="recipe_text_field">
  //           Slow Cooker Recipes
  //         </div>
  //       </div>
  //     </div>
  //     <div className="recipe_container_6">
  //       <div className="recipe_pic_container">
  //         <img src={game}/>
  //       </div>
  //       <div className="recipe_text_container">
  //         <div className="recipe_text_field">
  //           Game-Day Greats
  //         </div>
  //       </div>
  //     </div>
  //     <div className="recipe_container_7">
  //       <div className="recipe_pic_container">
  //         <img src={vegan}/>
  //       </div>
  //       <div className="recipe_text_container">
  //         <div className="recipe_text_field">
  //           Vegan Recipes
  //         </div>
  //       </div>
  //     </div>
  //     <div className="recipe_container_8">
  //       <div className="recipe_pic_container">
  //         <img src={healthy}/>
  //       </div>
  //       <div className="recipe_text_container">
  //         <div className="recipe_text_field">
  //           Healthy Eating
  //         </div>
  //       </div>
  //     </div>
  //     <div className="recipe_container_9">
  //       <div className="recipe_pic_container">

  //       </div>
  //       <div className="recipe_text_container">
  //         <div className="recipe_text_field">
  //           Keto Recipes
  //         </div>
  //       </div>
  //     </div>
  //   </div>  
  // );
}

export default Ch1;