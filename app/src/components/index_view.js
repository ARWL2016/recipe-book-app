import React, { Component } from 'react'; 
import starterRecipes from '../default-recipes.js'; 
import { Link } from 'react-router'; 

export default class IndexView extends Component {
  constructor (props) {
    super(props); 
    console.log('constructor call'); 
      const recipeList = JSON.parse(localStorage.getItem("recipeList")); 
      if (recipeList === null) {
        localStorage.setItem("recipeList", JSON.stringify(starterRecipes));
      } 
  }
  renderRecipeList() {
    const recipes = JSON.parse(localStorage.getItem("recipeList")); 
    return recipes.map((recipe) => {
      return <li key={recipe._id} className="list-group-item"><Link to={"recipe/" + recipe._id}>{recipe.title}</Link></li>
    }); 
  }
  render() {
    return (
      <div> 
        <h2>Recipe Collection!</h2> 
        <ul className="list-group">
          {this.renderRecipeList()}
        </ul> 
        <Link to="/add"><button className="btn btn-primary">Add New Recipe</button></Link> 
      </div>
    );
  }
}

