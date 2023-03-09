## Initialize project to use Prettier

-- We want to format code in the same way:
// create .prettierrc file
touch .prettierrc

--Add following json inside .prettierrc
{
"trailingComma": "none",
"semi": true,
"tabWidth": 2,
"singleQuote": false,
"printWidth": 120,
"arrowParens": "avoid"
}

## Initialize project to use NPM

--inside root folder run
npm init -y

## Initialize project to use Webpack

    --Scope

[x] Hot reload app then you change code
[x] Minimise & Obfuscate your code
[x] build app using Jenkins to prepare for Production

-- Installing required npm packages
npm install --save-dev webpack webpack-cli
npm i -D webpack-dev-server
npm i -D html-webpack-plugin

# create webpack.config.js file

    touch webpack.config.js

-- Edit webpack.config.js and add content from next slide

const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = env => {
const isProduction = !!env.WEBPACK_BUILD;
return {
mode: isProduction ? "production": "development",
entry: ["./src/index.js"],
devtool: isProduction ? false: "inline-source-map",
devServer: {
static: ["dist",
"src"],
watchFiles: ["src/**/*.*"]
},
plugins: [
new HtmlWebpackPlugin({
template: "./src/index.html"
})
],
output: {
filename: "main.js",
path: path.resolve(\_\_dirname, "dist"),
publicPath: "/"

## Configure npm scripts

-- Add following scripts inside package.json
{
"scripts": {
"clear": "npm run clean && rimraf node_modules",
"clean": "rimraf dist",
"build": "webpack --mode production",
"start": "webpack serve --open"
}
}

## Running scripts using npm or yarn

npm start
npm run build

yarn start
yarn build

## git clone

git clone "https://github.com/vaidanicu/-Team-Networking.git"

-open folder
-open terminal

## run command

-npm i (download)
