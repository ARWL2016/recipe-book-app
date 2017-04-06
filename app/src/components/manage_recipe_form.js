import React, { Component, PropTypes } from 'react'; 
import _ from 'underscore'; 
import RecipeForm from './recipe_form'; 

export default class ManageRecipeForm extends Component {
  static contextTypes = {
    router: PropTypes.object
  };
  constructor(props) {
    super(props); 

    this.state = { 
      recipe: { 
        title: '', 
        ingredients: '', 
        _id: '' 
      }, 
      error: {
        title: false, 
        ingredients: false
      }
    }; 

    if (this.props.params.id) {
      const recipes = JSON.parse(localStorage.getItem("recipeList"));  
      const selection = (recipes.filter((recipe) => recipe._id === this.props.params.id))[0]; 
      this.state = { 
        recipe: { 
          title: selection.title, 
          ingredients: selection.ingredients.join(), 
          _id: selection._id
        }
      };
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

    if (this.validateForm(recipe)) {
      recipe.ingredients = recipe.ingredients.split(','); 
      recipe._id = _.uniqueId(); 

      const recipeList = JSON.parse(localStorage.getItem("recipeList")); 
      const filteredList = recipeList.filter((data) => data.title !== recipe.title);

      filteredList.push(recipe); 
      localStorage.setItem("recipeList", JSON.stringify(filteredList)); 

      this.context.router.push('/');
    }
 
  }
  validateForm(recipe) {
    this.setState({error: {title: true, ingredients: true}});
    if (recipe.title.length > 3) {  
      this.state.error.title = false;  
      this.setState({error: this.state.error});
    } 
    if (recipe.ingredients.length > 3) {  
      this.state.error.ingredients = false;  
      this.setState({error: this.state.error});
    }

    console.log(this.state.error); 
  }
  
  render() {
    return <RecipeForm 
      error={this.state.error}
      recipe={this.state.recipe} 
      onChange={this.setRecipeState}
      onSave={this.saveRecipe}
      />  
  }
}

