import React, { Component, PropTypes } from 'react'; 
import _ from 'underscore'; 
import RecipeForm from './recipe_form'; 

export default class ManageRecipeForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  constructor(props) {
    super(props); 

    this.state = { recipe: { title: '', ingredients: '', _id: '' } }; 

    if (this.props.params.id) {
      const recipes = JSON.parse(localStorage.getItem("recipeList"));  
      const selection = (recipes.filter((recipe) => recipe._id === this.props.params.id))[0]; 
      this.state = { recipe: { 
        title: selection.title, 
        ingredients: selection.ingredients.join(), 
        _id: selection._id
      }};
    } 

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

    const recipeList = JSON.parse(localStorage.getItem("recipeList")); 
    const filteredList = recipeList.filter((data) => data.title !== recipe.title);

    filteredList.push(recipe); 
    localStorage.setItem("recipeList", JSON.stringify(filteredList)); 

    this.context.router.push('/'); 
  }
  
  render() {
    return <RecipeForm 
      recipe={this.state.recipe} 
      onChange={this.setRecipeState}
      onSave={this.saveRecipe}
      />  
  }
}

