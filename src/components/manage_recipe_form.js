import React, { Component } from 'react'; 

import RecipeForm from './recipe_form'; 

export default class ManageRecipeForm extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      recipe: {
        name: '', 
        ingredients: ''
      }
    }; 
    this.setRecipeState = this.setRecipeState.bind(this); 
  }
  setRecipeState(e) {
    console.log(e.target.value); 
    console.log(e.target.name); 
    this.state.recipe[e.target.name] = e.target.value; 
    this.setState({recipe: this.state.recipe}); 
  }
  
  render() {
    return <RecipeForm 
      onChange={this.setRecipeState}
      recipe={this.state.recipe}/>  
  }
}