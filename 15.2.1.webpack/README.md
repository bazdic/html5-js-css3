# Prerequisites
- Node.js (https://nodejs.org/en/)

# Initialise your app
- run `npm init -y` // initialise NPM package
- run `mkdir src dist` // create src and dist folders
- run `echo. > src/index.js` // create empty src/index.js
  - add ES6 class into newly created index.js
- run `echo. > dist/index.html` // create empty index HTML
  - add default HTML5 markup and script loading main.js

# Add webpack
- run `npm i webpack webpack-cli --save-dev` // add webpack dependencies
- add `"build": "webpack --mode production"` // add build script into package.json
- run `npm run build` // build app using webpack
- browse the index.html 
  - in Chrome // shoud work
  - in IE // should throw console error

# Add Babel
- run `npm i babel-loader @babel/core @babel/preset-env --save-dev` // add babel dependencies
- run `echo. > webpack.config.js` // create empty webpack configuration
  - configure .js files to use babel-loader with @babel/preset-env preset
- run `npm run build` // build app using webpack again
- browse the index.html
  - in Chrome // shoud work
  - in IE // should work