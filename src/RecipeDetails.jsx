import React from 'react';
import queryString from 'query-string';
import clock from './clock_svg.svg';
import all_recipes from './recipes.js';
import TaskBar from './TaskBar';
import { fetchData } from './Api';
import instpot from './instpot.jpg';
import { store } from './index';

function RecipeDetails({ history }) {
    const [localRecipes, setLocalRecipes] = React.useState({ error: false, loading: false, items: [] });
    React.useEffect(() => {
        fetchData().then(recipes => setLocalRecipes(recipes));
    }, []);
    const parsed = queryString.parse(history.location.search);
    const uid = parsed.uid;
    const recipe = localRecipes.items.filter(recipe => recipe.uid === uid)[0];
    if (!recipe) {
        return null
    }
    store.dispatch({ type: "CLICK_ITEM" });
    console.log(store.getState());
    return (
        <div>
            <TaskBar />
            <div
                style={{
                    position: 'fixed',
                    top: 100,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: "#f4e1d7",
                    overflow: "scroll"
                }}>
                <div
                    style={{
                        position: "absolute",
                        marginLeft: 700,
                        marginTop: 170,
                        marginRight: 20

                    }}
                >
                    <p
                        style={{
                            fontSize: "4rem",
                            fontWeight: "bold"
                        }}>Ingredients</p>
                    <div
                        style={{
                            columnCount: 2,
                            fontSize: "2rem",
                            fontFamily: "Roboto"

                        }}
                    >{recipe.ingredients}</div>
                    <hr />
                    <br />
                    <div
                        style={{
                            fontSize: "4rem",
                            fontWeight: "bold"
                        }}>Directions</div>
                    <br />
                    <div
                        style={{ display: "flex" }}>
                        <img src={clock} style={{ width: 50 }} />
                        <div className="dir_flexbox">
                            Prep 25 m
                        </div>
                        <div className="dir_flexbox_1">
                            Cook 1 h
                        </div>
                        <div className="dir_flexbox_2">
                            Ready In 1 h 25 m
                        </div>

                    </div>
                    <br />
                    <div
                        style={{
                            columnCount: 2,
                            fontSize: "2rem",
                            fontFamily: "Roboto"

                        }}
                    >Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi. Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</div>
                    <br />
                    <br />

                </div>
                \
                
                <p style={{ fontWeight: "bold", fontSize: "5rem", marginLeft: 10 }}>{recipe.name}</p>
                <img style={{ marginLeft: 20, width: 500, }} src={recipe.image} />

            </div>
        </div>

    )
}


export default RecipeDetails;