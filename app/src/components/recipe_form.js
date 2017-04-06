import React, { Component } from 'react'; 
import { Link } from 'react-router'; 

export default class RecipeForm extends Component {
  render() {
    return (
      <div> 
        <h2>Recipe Form</h2> 
        <form> 
          <div className={`form-group ${this.props.error.title ? 'has-danger': ''}`}> 
            <label class="control-label" htmlFor="title">Recipe name</label> 
            <input 
              type="text" 
              name="title" 
              placeholder="enter a name for your recipe" 
              className="form-control"
              onChange={this.props.onChange} 
              value={this.props.recipe.title}/> 
              <span class="help-block">{this.props.error.title ? 'Please enter a recipe name' : ''}</span>
          </div> 
          <div className={`form-group ${this.props.error.ingredients ? 'has-danger': ''}`}> 
            <label class="control-label" htmlFor="ingredients">Ingredients</label> 
            <textarea 
              name="ingredients"
              placeholder="enter your ingredients, divided by commas" 
              rows="5" 
              className="form-control" 
              onChange={this.props.onChange} 
              value={this.props.recipe.ingredients}/> 
              <span class="help-block">{this.props.error.ingredients ? 'Please enter some ingredients' : ''}</span>
          </div> 
          <button type="submit" className="btn btn-primary" onClick={this.props.onSave}>Save</button> 
          <Link to="/"><button className="btn btn-warning">Cancel</button></Link>
        </form> 
      </div> 
    );
  }
}

RecipeForm.propTypes = {
  error: React.PropTypes.object.isRequired,
  recipe: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onSave: React.PropTypes.func.isRequired
}