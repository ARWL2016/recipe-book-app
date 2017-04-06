import React, { Component, PropTypes } from 'react'; 
import { Link } from 'react-router';

export default class RecipeView extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  constructor(props) {
    super(props); 
    this.deleteRecipe = this.deleteRecipe.bind(this); 
  }

  fetchSelectedRecipe() {
    const recipes = JSON.parse(localStorage.getItem("recipeList"));  
    const selectedRecipe = recipes.filter((recipe) => recipe._id === this.props.params.id);
    return (
      <div>
        <h3>{selectedRecipe[0].title}</h3>
        <ul className="list-group"> 
         {selectedRecipe[0].ingredients.map((ingredient) => {
           return <li key={ingredient} className="list-group-item">{ingredient}</li>; 
         })}
        </ul>
      </div> 
    )
  }
  deleteRecipe() {
    console.log('delete');
    const recipes = JSON.parse(localStorage.getItem("recipeList"));  
    const recipeList = recipes.filter((recipe) => recipe._id !== this.props.params.id); 
    localStorage.setItem("recipeList", JSON.stringify(recipeList)); 
    
    this.context.router.push('/'); 
  }

  render() {
    return (
      <div>
        <Link to='/'>Back to Recipe List</Link> 
        {this.fetchSelectedRecipe()}
        <Link to={"/edit/" + this.props.params.id}><button className="btn btn-primary">Edit this Recipe</button></Link> 
        <button onClick={this.deleteRecipe} className="btn btn-danger" >Delete this Recipe</button>
      </div>
    )
  }
     

}

