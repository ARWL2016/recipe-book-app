import React, { Component } from 'react'; 
import starterRecipes from '../default-recipes.js'; 
import { Link } from 'react-router'; 

export default class IndexView extends Component {
  constructor (props) {
    super(props); 
      console.log('constructor call');
      const listBeforeMount = JSON.parse(localStorage.getItem("recipeList")); 
      console.log(listBeforeMount); 
      if (listBeforeMount === null) {
        console.log('no data, adding default data');
        localStorage.setItem("recipeList", JSON.stringify(starterRecipes));
      } else {
        console.log('data exists'); 
        console.log(listBeforeMount); 
      }
  }
  componentWillMount() {
    console.log('will mount'); 
  }
  componentDidMount() {
    console.log('did mount'); 
  }

  renderRecipeList() {
    const recipes = JSON.parse(localStorage.getItem("recipeList")); 
    console.log(`render recipe list with ${recipes.length} objects`);
    console.log(recipes)
    return recipes.map((recipe) => {
      return <li key={recipe._id} className="list-group-item"><Link to={"recipe/" + recipe._id}>{recipe.title}</Link></li>
    }); 
  }; 
  render() {
    return (
      <div> 
        <h2>My Recipes</h2> 
        <ul className="list-group">
          {this.renderRecipeList()}
        </ul> 
        <Link to="/add"><button className="btn btn-primary">Add New Recipe</button></Link> 
      </div>
      
    );
  }
}

