import { combineReducers } from 'redux';
import RecipeReducer from './reducer_recipes'; 
import newRecipe from './reducer_recipePicker'; 

const rootReducer = combineReducers({
  recipes: RecipeReducer, 
  newRecipe: newRecipe
});

export default rootReducer;
