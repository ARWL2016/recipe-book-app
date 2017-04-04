import React, { Component } from 'react'; 
import starterRecipes from '../default-recipes.js'; 
import { Link } from 'react-router'; 

export default class IndexView extends Component {
  constructor (props) {
    super(props); 
    localStorage.setItem("recipeList", JSON.stringify(starterRecipes));
  }
  renderRecipeList() {
    const recipes = JSON.parse(localStorage.getItem("recipeList")); 
    return recipes.map((recipe) => {
      return <h4 key={recipe.title}><Link to="">{recipe.title}</Link></h4>
    }); 
  }; 
  render() {
    return (
      <div>
        {this.renderRecipeList()}
      </div> 
      
    );
  }
}

