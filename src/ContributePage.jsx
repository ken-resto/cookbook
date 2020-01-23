import React from 'react';
import Contribute from './Contribute';
import TaskBar from './TaskBar';

export default function RecipeListMainPage({history}){
    return(
<div>
    <TaskBar/>
    <Contribute/>
</div>
    )
}