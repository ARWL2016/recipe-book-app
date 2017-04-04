import React from 'react'; 
import { Route, IndexRoute } from 'react-router'; 

import App from './components/app';
import IndexView from './components/index_view'; 

export default (
  <Route path='/' component={App} > 
    <IndexRoute component={IndexView} /> 
    <Route path='recipe' component={RecipeView} />
  </Route> 

); 