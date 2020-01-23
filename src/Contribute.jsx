import React from 'react';
import { addData, fetchData } from './Api.js';
import './Ch1.css';
import { store } from './index.js';
var recipes = [];
class Contribute extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            testing: 'init',
            recipes: {
                error: false,
                loading: false,
                items: [],
            }
        };

    }


    componentDidMount() {
        fetchData().then(data => {
            const newState = { recipes: data, testing: 'Some string here' };
            this.setState(newState);

        });
    }
    /*
 fetch = async () => {
        recipes = await fetchData();
        console.log(recipes);
        return recipes;

    };*/



    handleSubmit = async (e) => {
        e.preventDefault();
        const recipeUID = e.target.elements.recipe_uid.value;
        const recipeImage = e.target.elements.recipe_image.value;
        const recipeName = e.target.elements.recipe_name.value;
        const recipeIngredients = e.target.elements.recipe_ingredients.value;
        const recipeDirections = e.target.elements.recipe_directions.value;

        console.log("uid: ", recipeUID, "image: ", recipeImage, " name: ", recipeName, " ingr: ", recipeIngredients, " dir: ", recipeDirections);
        addData(recipeUID, recipeName, recipeImage, recipeIngredients, recipeDirections)
        store.dispatch({type:"DATA_SUBMIT"});
        console.log(store.getState());
    };


    render() {

        return (
            <div>
                <div
                    style={{
                        marginTop: 120,
                        fontSize: 40
                    }}
                >
                    We are happy to hear that you wish to share some of your own original recipes. Please fill the following and hit submit
            </div>
                <form id="recipe_form" onSubmit={this.handleSubmit}>

                    <input type="text" id="recipe_uid" placeholder="Recipe UID"
                        style={{
                            height: 50, float: "left", width: "25%", padding: "1% 2%", marginBottom: 10, marginLeft: "37%", borderRadius: 15, background: "#dcb5b5", border: "1px solid #c4c4c4"
                        }}></input>

                    <input type="text" id="recipe_name" placeholder="Recipe Title"
                        style={{
                            height: 50, float: "left", width: "25%", padding: "1% 2%", marginBottom: 10, marginLeft: "37%", borderRadius: 15, background: "#dcb5b5", border: "1px solid #c4c4c4"
                        }}></input>
                    <input type="text" id="recipe_image" placeholder="Recipe Image Link"
                        style={{
                            height: 50, float: "left", width: "25%", padding: "1% 2%", marginBottom: 10, marginLeft: "37%", borderRadius: 15, background: "#dcb5b5", border: "1px solid #c4c4c4"
                        }}></input>

                    <input type="text" id="recipe_ingredients" placeholder="Recipe Ingredients"
                        style={{
                            height: 200, float: "left", width: "75%", padding: "1% 2%", marginBottom: 10, marginLeft: "12%", borderRadius: 15, background: "#dcb5b5", border: "1px solid #c4c4c4"
                        }}></input>
                    <input type="text" id="recipe_directions" placeholder="Recipe Directions"
                        style={{
                            height: 200, float: "left", width: "75%", padding: "1% 2%", marginBottom: 10, marginLeft: "12%", borderRadius: 15, background: "#dcb5b5", border: "1px solid #c4c4c4"
                        }}></input>

                    <input type="submit" id="submit"
                        style={{
                            height: 50, width: "35%", marginLeft: "32%", borderRadius: 15, padding: "1% 2%", color: "white", background: "#1f2427",borderColor:"black"
                        }}></input>
                </form>
            </div>
        );
    }
}

export default Contribute;
export { recipes };