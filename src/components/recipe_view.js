import React, { Component } from 'react'; 

export default class RecipeView extends Component {
  fetchSelectedRecipe() {
    const recipes = JSON.parse(localStorage.getItem("recipeList"));  
    const selectedRecipe = recipes.filter((recipe) => {
      return recipe._id === this.props.params.id; 
    });
    return (
      <div>
        <h3>{selectedRecipe[0].title}</h3>
        <ul> 
          {selectedRecipe[0].ingredients.map(ingredient => <li>{ingredient}</li>)}
        </ul>
      </div> 
    )
  }

  render() {
    return (
      <div>
        {this.fetchSelectedRecipe()}
      </div>
    )
  }
     

}
