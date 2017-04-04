import React, { Component } from 'react'; 
import { connect } from 'react-redux'; 
import { bindActionCreators } from 'redux'; 
import { addRecipe } from '../actions/index'; 

class IndexView extends Component {
  constructor(props) {
    super(props); 

    this.handleClick = this.handleClick.bind(this); 
  }

  handleClick() {
    const newDish = {title: "meat and two veg"}; 
    this.props.addRecipe(newDish); 
  }
   
  renderRecipeList() {
    return this.props.recipes.map((recipe) => {
      return (
        <li key={recipe.title}>{recipe.title}</li> 
      );
    });
  }
  
  render() {
    return (
      <div>
        <ul> 
          {this.renderRecipeList()}
        </ul>
        <button onClick={this.handleClick}>Add Recipe</button>
        {/*<p>{this.props.newRecipe.title}</p>*/}
          
      </div> 
    );
  }
}

function mapStateToProps(state) {
  return { 
    recipes: state.recipes, 
    newRecipe: state.newRecipe

  }; 
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addRecipe }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(IndexView); 