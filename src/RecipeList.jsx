import React from 'react';

function RecipeList({style, items, isClicked}) {

    return (
        <div style={{ ...style, display: "grid", gridTemplateColumns: "auto auto auto" }}>
            {items.map(item => {
                return (
                    <div
                        style={{ width: 450 }}
                        onClick={()=>isClicked(item)}
                    >
                        <img src={item.image} style={{marginLeft:50}} />
                        <p style={{ fontSize: "3rem",marginLeft:50 }}>{item.name}</p>
                    </div>
                )
            })}
        </div>
    )
}
export default RecipeList;