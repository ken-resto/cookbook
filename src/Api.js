const firebase = require("firebase");
require("firebase/firestore");

/*const database=firebase.database();
var ref=database.ref('recipes');
ref.on('value',gotData,errData);
}

function gotData(data){
    console.log(data);
}
function errData(err){
    console.log('Error!');
    console.log(err);
}*/
function addData(uid1,name1, image1, ingredients1,directions1) {
    firebase.firestore().collection("recipes").add({
        uid:uid1,
        name: name1,
        image: image1,
        ingredients: ingredients1,
        directions: directions1,
        timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

}

// let recipes = {
//     loading: false,
//     error: false,
//     items: [],
// };

async function fetchData() {
    const dat1=[];
    // const recipesSnap = await firebase.firestore().collection('recipes').get();
    // recipesSnap.docs.forEach(function (doc) {
    //     // doc.data() is never undefined for query doc snapshots
    //     //console.log(doc.id, " => ", doc.data());
    //     dat1.push(doc.data());
    // });

    const recipesSnap = await firebase.firestore().collection('recipes').get().then(function (querySnapshot) {
        querySnapshot.forEach(function (doc) {
            // doc.data() is never undefined for query doc snapshots
            //console.log(doc.id, " => ", doc.data());
            dat1.push(doc.data());
        });
    });

    return {
        loading: false,
        error: false,
        items: dat1,
    }
    // console.log("Recipes: ", recipes);
    // return dat1;
}
async function fetchAdData(){
    const dat=[];
    const recipesSnap=await firebase.firestore().collection('ad').get().then(function (querySnapshot){
        querySnapshot.forEach(function (doc){
            dat.push(doc.data());
        });
    });
    return dat;
}
/* const recipes = recipesSnap.docs.map(recipeDoc => ({ uid: recipeDoc.id, ...recipeDoc.data() }));*/

export {
    addData,
    fetchData,
    fetchAdData
};