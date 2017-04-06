### React Recipe Book Application 

A CRUD application for storing recipe information in the browser local storage. 

#### Useful Links 
https://github.com/ARWL2016/recipe-book-app 
https://www.freecodecamp.com/challenges/build-a-recipe-box  

#### Built with:
- React 
- React-Router 
- Underscore 
- Bootstrap 
- Webpack 

#### Development Mode 
- run webpack-dev-server with `npm run start:dev`
- this will serve a bundle from memory at the publicPath `assets/bundle.js` - so reference this in index.html 

#### Production Build 
- `npm run build:prod` - this will place a production bundle in `app/build`
- adjust link in index.html 
- `npm start` will run the app by serving static files from the app folder  