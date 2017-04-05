import React from 'react'; 
import { Route, IndexRoute } from 'react-router'; 

import App from './components/app';
import IndexView from './components/index_view'; 
import RecipeView from './components/recipe_view'; 
import ManageRecipeForm from './components/manage_recipe_form'; 

export default (
  <Route path='/' component={App} > 
    <IndexRoute component={IndexView} /> 
    <Route path='recipe/:id' component={RecipeView} />
    <Route path='add' component={ManageRecipeForm} />
    <Route path='edit/:id' component={ManageRecipeForm} />
  </Route> 

); 