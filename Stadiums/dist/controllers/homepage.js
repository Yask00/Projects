'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.homeController = undefined;

var _templates = require('templates');

require('bootstrap');

var homeController = function homeController() {
    _templates.templates.getPage('home', {}).done();
};

exports.homeController = homeController;