# ionic2-starter-vvbase
Mon template de base en ionic 2
Ionic 2 Starter: Developer Preview
This is a simple developer preview of an Ionic 2 starter project, the next generation of Ionic. Ionic is an open-source mobile app development SDK that makes it easy to build top quality mobile apps with web technologies.

Ionic 2 is based on the new 2.x version of AngularJS, and comes with many significant performance, usability, and feature improvements.

Getting Started

Clone repo
npm install
gulp serve
The gulp watch task will build Ionic2, which may take a few moments for the initial build. After the files have finished building, a browser will open with the Ionic2 starter app. Any source file changes will rebuild the app and live reload the page. Also be sure to emulate the app in iOS and Android devices (Chrome Screen Emulation).

Notes:

To develop against a local version of ionic2 you'll need to do the following:
# do this in your local ionic2 directory
$ cd /Users/Ionitron/git/ionic2
$ gulp src
$ npm link

# now go to your ionic2-starter directory
$ cd /Users/Ionitron/git/ionic2-starter
$ npm link ionic2
And then update your webpack.config.js file by uncommenting the lines for local development:

resolve: {
  modulesDirectories: [
    "node_modules",
  //"node_modules/ionic-framework/src/es5/common"
    "node_modules/ionic2/dist/src/es5/common"
  ]
}
As well as your gulpfile.js:

//var IONIC_DIR = "node_modules/ionic-framework/"
var IONIC_DIR = "node_modules/ionic2/dist/"
* Ionic 2 will be integrated within the Ionic CLI, Ionic Lab, Ionic Creator (basically every Ionic tool), to make building an Ionic app even easier.

Things to keep in mind

Ionic 2 is alpha, and so is Angular 2. There are number of things being actively worked on that aren't quite ready yet. Here are some things to keep in mind as you try out Ionic 2 and Angular 2:

Missing Ionic 1 features

We are currently working on completing a few core Ionic 1 features:

Collection repeat (known as Virtual Scrolling in v2) is not quite ready
Current Angular 2 known issues:

Angular 2 is still in alpha and is not production ready
Angular team has first focused on developing what the core of Angular 2 "is"
Angular 2 filesize has not been optimized for minification yet
Angular 2 bootstrap time has not been optimized yet
As Angular 2 reaches beta there will be significant performance improvements
ES6/Typescript

Ionic's source is written using Typescript
Ionic apps can be written in ES6 or TypeScript
Typescript is an optional feature to be used at the developers discretion
Ionic 2 starters come with the necessary build tools to transpile both ES6 and Typescript
CSS Attribute Selectors:

Simple
Smaller markup
Easier to read and understand
Not an issue for today's mobile browsers
No performance impacts have been found
Distribution

npm: ionic-framework
Webpack

Starter project is already setup to build Ionic using Webpack
