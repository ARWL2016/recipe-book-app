import React, { Component } from 'react'; 
import { Link } from 'react-router';

export default class RecipeView extends Component {
  fetchSelectedRecipe() {
    const recipes = JSON.parse(localStorage.getItem("recipeList"));  
    const selectedRecipe = recipes.filter((recipe) => {
      return recipe._id === this.props.params.id; 
    });
    return (
      <div>
        <h3>{selectedRecipe[0].title}</h3>
        <ul className="list-group"> 
          {selectedRecipe[0].ingredients.map(ingredient => <li key={ingredient} className="list-group-item">{ingredient}</li>)}
        </ul>
      </div> 
    )
  }

  render() {
    return (
      <div>
        <Link to='/'>Back to Recipe List</Link> 
        {this.fetchSelectedRecipe()}
      </div>
    )
  }
     

}
