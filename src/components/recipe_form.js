import React, { Component } from 'react'; 
import { Link } from 'react-router'; 

export default class RecipeForm extends Component {
  render() {
    return (
      <div> 
      <Link to='/'>Back to Recipe List</Link>
        <h2>Recipe Form</h2> 
        <form> 
          <div className="form-group"> 
            <label htmlFor="title">Recipe name</label> 
            <input 
              type="text" 
              name="title" 
              placeholder="enter a name for your recipe" 
              className="form-control"
              onChange={this.props.onChange} 
              value={this.props.recipe.title}/> 
          </div> 
          <div className="form-group"> 
            <label htmlFor="ingredients">Ingredients</label> 
            <textarea 
              name="ingredients" 
              placeholder="enter your ingredients, divided by commas" 
              rows="5" 
              className="form-control" 
              onChange={this.props.onChange} 
              value={this.props.recipe.ingredients} />
          </div> 
          <button type="submit" className="btn btn-primary" onClick={this.props.onSave}>Save</button> 
          <Link to="/"><button className="btn btn-warning">Cancel</button></Link>
        </form> 
        
        

      </div> 
    ) 
  }
}

RecipeForm.propTypes = {
  recipe: React.PropTypes.object.isRequired,
  onChange: React.PropTypes.func.isRequired,
  onSave: React.PropTypes.func.isRequired
}