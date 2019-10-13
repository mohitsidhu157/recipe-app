import React from "react";
import style from './Recipe.module.css';
const Recipe = (props) => {
    return (
        <div className={style.Recipe}>
            <h1>Title : {props.title}</h1>
            <ol>
                {props.ingredients.map(ingredient=><li>{ingredient.text}</li>)}
            </ol>
            <p>{props.calories.toFixed(2)}</p>
            <img src={props.image} alt="" className={style.image}/>
        </div>
    );
}
export default Recipe;