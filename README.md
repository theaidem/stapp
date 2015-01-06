staap
========

 High productivity boilerplate make the powerfull combo coffee/stylus/jade easy to test & deploy.

### This template use
- [Gulp](http://gulpjs.com/)
- [Bower](http://bower.io/)
- [Stylus](http://learnboost.github.io/stylus/)
- [CoffeeScript](http://coffeescript.org/)
- [Jade](http://jade-lang.com/)

### Getting started 

Install nodejs if you don't have it : [nodejs.org](http://nodejs.org/)

Then copy/clone the repo in a folder and type in the console
```shell
cd yourAppFolder/
npm install
```

Edit "bower.json" to keep only the lib you want and then :
```shell
gulp
```

To build the final files ( imagemin/cssmin/jsmin/htmlmin/versionning/etc.. ) :
```shell
gulp build
```

### What the template do exactly for you
- create a local server with livereload ( reload your browser  when you change a file )
- compile your stylus / jade / coffeescript
- give a nice, light and basic structure for your coffee/stylus development
- sourcemap for stylus & coffeescript for easy debugging
- notify the compilation success/error via growl
- include optimized .httaccess / manifest / robot for your webapp
- include nib for stylus
- install new bower depedency automatically
- inject the lib you want with bower to your html
- minify the images/js/html/css for  you
- concatenate your css & js
