import React, { Component } from 'react'; 
import _ from 'underscore'; 
import RecipeForm from './recipe_form'; 

export default class ManageRecipeForm extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      recipe: {
        title: '', 
        ingredients: '', 
        _id: ''
      }
    }; 
    this.setRecipeState = this.setRecipeState.bind(this); 
    this.saveRecipe = this.saveRecipe.bind(this); 
  }
  setRecipeState(e) { 
    this.state.recipe[e.target.name] = e.target.value; 
    this.setState({recipe: this.state.recipe}); 
  }
  saveRecipe(e) {
    e.preventDefault(); 
    const {recipe} = this.state; 
    recipe.ingredients = recipe.ingredients.split(','); 
    recipe._id = _.uniqueId(); 
    console.log('Object to be saved:'); 
    console.log(recipe); 
    const recipeList = JSON.parse(localStorage.getItem("recipeList")); 
    recipeList.push(recipe); 
    localStorage.setItem("recipeList", JSON.stringify(recipeList)); 

    console.log(JSON.parse(localStorage.getItem("recipeList")));
  }
  
  render() {
    return <RecipeForm 
      recipe={this.state.recipe} 
      onChange={this.setRecipeState}
      onSave={this.saveRecipe}
      />  
  }
}

