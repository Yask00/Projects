/* eslint-disable max-len */
SystemJS.config({
    'transpiler': 'plugin-babel',
    'map': {
        // systemJS
        'plugin-babel': '../node_modules/systemjs-plugin-babel/plugin-babel.js',
        'systemjs-babel-build': '../node_modules/systemjs-plugin-babel/systemjs-babel-browser.js',

        // jquery
        'jquery': '../node_modules/jquery/dist/jquery.js',

        // for HTML rendering:
        'handlebars': '../node_modules/handlebars/dist/handlebars.js',

        'bootstrap': '../node_modules/bootstrap/dist/js/bootstrap.min.js',

        // for Routing
        'navigo': '../node_modules/navigo/lib/navigo.js',

        // App files
        'index': '../app-modules/index.js',
        'templates': '../app-modules/templates.js',

        // Pages Controllers
        'homeController': '../controllers/homepage.js',
        'fiveStarsController': '../controllers/fiveStarsController.js',
        'fourStarsController': '../controllers/fourStarsController.js',
        'threeStarsController': '../controllers/threeStarsController.js',

        // database
        'stadiumsDatabase': '../database/db.js',

    },
});
