# Advanced Lecture - Webpack Crash Course 3000

## Objectives
- [X] webpack (what?, why?, who?...jk)
- [X] default behavior
- [X] entrypoint
- [X] mode
- [X] output
- [X] cache busting
- [X] plugins
- [X] loaders
- [X] babel
- [X] different modes (stretch)

## What is Webpack

Before attempting any sort of definition, how does `Webpack` describe itself? A quick trip to the webpack docs reveals this line, "bundle your assets". Fair, short, maybe a bit too confident on who their target audience is, but if you click on *documentation* you'll get this definition

> At its core, webpack is a static module bundler for modern JavaScript applications. When webpack processes your application, it internally builds a dependency graph from one or more entry points and then combines every module your project needs into one or more bundles, which are static assets to serve your content from.

In other words, it take all of our JavaScript modules and converts them down into a bundle handling the dependency tree so we don't have to.

## Why Webpack

1. It gives us the ability to simply write JavaScript modules using the module syntax (`import module from 'module'` & `export default module`) while it traverses these imports to build a dependency tree for our bundles.

2. Hot module replacement (HMR), which gives us the ability to edit our modules while our application is running without a full reload.

3. Extremely configurable to our particular development workflows.

## Default Behavior

As of version 4 of Webpack, a configuration file is **not** needed in order to bundle our modules. In our project, as long as we have a `src/index.js` we can simply run `webpack` in our command line which will output a bundled file called `main.js` in a directory called `dist/`.

## Entrypoint

However, Webpack is extremely configurable. An entrypoint is a file in which Webpack will use as a starting point to begin building out it's dependency graph. By default, this value is set to `./src/index.js` but this can be configured.

```js
// src/entry.js
import App from './App';
import ReactDOM from 'react-dom';

ReactDOM.render(<App />, document.getElementById("awesome-id"));
```

```js
// webpack.config.js
module.export = {
  entry: './src/entry.js',
  ...
}
```

**note**: when using a configuration file, you need to specify the `--config` flag when calling `webpack` and pass your configuration file as an argument.

```sh
$ webpack --config webpack.config.js
```

## Mode

The mode attribute gives us a bit of configuration for how the bundle is outputted. A 'production' mode will minify the code for smaller file size while for 'development' mode our resulting bundle is more readable but not minified.

```js
// webpack.config.js
module.exports = {
  mode: 'production',
  ...
}

// for development
module.exports = {
  mode: 'development', 
  devtool: false, // remove evals
  ...
}
```

## Output

Like our entry, we can also specify where our resulting bundle will be outputted to as well as the name of the resulting file.

```js
const path = require("path");

module.exports = {
    output: {
      path: path.resolve(__dirname, 'build'), // name of the directory and the absolute path to it
      filename: 'bundle.js' // name of the output js bundle file
  },
  ...
}
```

### Cache busting

Often, when our browser requests a file that it has requested before, it may receive an instruction from the response to use the cached version that it has in memory. When building our bundles, this could mean serving up these new files with the same names could result in users using cached (old versions) of our application code (not ideal). 

Instead, what we can do is hash the contents of the files and append this hash to the bundle name, that way a differently named bundle is only created if any of our application code modules changes. This also means, that a different file name will be used forcing the browser to make the request for the new file. To take advantage of this, we can just pass `[contenthash]` into square brackets to specify that we want to hash the contents of the application and add that to our bundle name.

```js
module.exports = {
    output: {
      path: path.resolve(__dirname, 'build'), 
      filename: '[hashcontent].bundle.js' // name of the output js bundle file
  },
  ...
}
```

Our outputed bundle will now look something like `./build/2c95d2348c44df7f367f.bundle.js` 

## Plugins
Plugins gives us further extensibility for managing our asset files among many other things. For example, up until this point, all of our bundles would need to be read into an html file with a `<script>` tag manually every single time we build. To avoid this, we can bring in a plugin that allows us to use and `html` template and inject our resulting bundle script tag into our return asset files.

```js
const path = require("path"); 
// require the plugin first it is a class 
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  ...,
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html' // can specify a template to inject script tag into
    }),
    new CleanWebpackPlugin() // cleans up old bundles
  ]
}
```

## Loaders
Webpack only knows how to handle `javascript` and `json` files out of the box. In order to handle other types of asset files, configuration is needed in order to convert them into javascript modules in order to use. 

Imagine, we wanted to use `.css` files in our application code. Unfortunately, webpack doesn't know how to handle these without configuration.

```js
module.exports = {
  ..., 
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader','css-loader'] 
      }
    ]
  }
}
```

We can chain these loaders together to leverage their functionality for specific use-cases. Not, the array in the `use` attribute goes from last item to first. In the particular instance above, `css-loader` is responsible for convering all `css` files into valid string in our bundle. What `style-loader` does is take that string and inserts it into the DOM using a `<style>` element.

## Babel
What is Babel? Babel is a JavaScript transpiler. What is a transpiler? Well, a transpiler takes in one programming language and converts it to another. In our case, Babel converts our JavaScript to an earlier version of JavaScript that is more compatible across more browsers. 

In the case of React, it also allows us to use more experimental features, such as JSX and traspile it to the equivalent ES5 syntax. 

This could also be used in the case of JavaScript supersets, such as TypeScript where Babel can traspile it into JavaScript so that it can be run in the browser.

Here's an example:

ES2015 arrow functions
```js
[1, 2, 3].map((v) => console.log(v));
```

transpiled into ES5
```js
[1, 2, 3].map(function(v){
  console.log(v);
});
```

## Helpful Links
- [Webpack docs](https://webpack.js.org/)
- [Babel docs](https://babeljs.io/)
- [What is @babel/preset-env and why do I need it?](https://blog.jakoblind.no/babel-preset-env/) by Jakob Lind
- [Analyse your bundle](https://webpack.github.io/analyse/)

## Other Bundlers
- [Browserify](https://browserify.org/)