import React from 'react'; 
import { Route, IndexRoute } from 'react-router'; 

import App from './components/app';
import IndexView from './components/index_view'; 
import RecipeView from './components/recipe_view'; 

export default (
  <Route path='/' component={App} > 
    <IndexRoute component={IndexView} /> 
    <Route path='recipe/:id' component={RecipeView} />
  </Route> 

); 