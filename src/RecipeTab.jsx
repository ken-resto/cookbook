import React from 'react';
import RecipeTitle from "./RecipeTitle.jsx"
import RecipeList from "./RecipeList.jsx"
function RecipeTab({ open, closeFrame,items_a,isClicked_a }) {
    return (
        <div
            style={{
                display: open ? 'inherit' : 'none',
                position:"fixed",
                top: 100,
                left: 0,
                right: 0,
                bottom: 0,
                background: "#f4e1d7",
                overflow:"scroll"


            }}>
         <RecipeTitle/>
          
          <RecipeList
              items={items_a}
              isClicked={isClicked_a}
          />
            <button
                style={{
                    top: 105,
                    right: 15,
                    position: "fixed",
                    fontSize: "3rem",
                    backgroundColor: "#f4e1d7",
                    borderRadius: 19,
                    fontFamily:"Roboto",
                    border:"1px solid transparent"
                }}
                onClick={closeFrame}
            >X
         </button>
        </div>
    )
}

export default RecipeTab; 