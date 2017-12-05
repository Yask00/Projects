'use strict';

require('jquery');

require('bootstrap');

var _stadiumsDatabase = require('stadiumsDatabase');

var _templates = require('templates');

var _homeController = require('homeController');

var _fiveStarsController = require('fiveStarsController');

var _fourStarsController = require('fourStarsController');

var _threeStarsController = require('threeStarsController');

// Pages
var router = new Navigo(null, false, '#!');

// Templates


router.on(function () {
    return (0, _homeController.homeController)();
}).on({
    '/#/fivestars': function fivestars() {
        return (0, _fiveStarsController.fiveStarsController)();
    },
    '/#/fourstars': function fourstars() {
        return (0, _fourStarsController.fourStarsController)();
    },
    '/#/threestars': function threestars() {
        return (0, _threeStarsController.threeStarsController)();
    },
    '/#/fivestars/:id': function fivestarsId(params) {
        var allPostsArr = [];

        _stadiumsDatabase.stadiumsDatabase.getByStarsandId('fivestars', params.id).then(function (post) {
            var id = post._id;
            var name = post.name;
            var country = post.country;
            var city = post.city;
            var capacity = post.capacity;
            var fieldsize = post.fieldsize;
            var info = post.info;
            var image = post.image;

            var postObj = {
                id: id,
                name: name,
                country: country,
                city: city,
                capacity: capacity,
                fieldsize: fieldsize,
                info: info,
                image: image
            };

            allPostsArr.push(postObj);

            loadPosts(allPostsArr);
        });
    },
    '/#/fourstars/:id': function fourstarsId(params) {
        var allPostsArr = [];

        _stadiumsDatabase.stadiumsDatabase.getByStarsandId('fourstars', params.id).then(function (post) {
            var id = post._id;
            var name = post.name;
            var country = post.country;
            var city = post.city;
            var capacity = post.capacity;
            var fieldsize = post.fieldsize;
            var info = post.info;
            var image = post.image;

            var postObj = {
                id: id,
                name: name,
                country: country,
                city: city,
                capacity: capacity,
                fieldsize: fieldsize,
                info: info,
                image: image
            };

            allPostsArr.push(postObj);

            loadPosts(allPostsArr);
        });
    },
    '/#/threestars/:id': function threestarsId(params) {
        var allPostsArr = [];

        _stadiumsDatabase.stadiumsDatabase.getByStarsandId('threestars', params.id).then(function (post) {
            var id = post._id;
            var name = post.name;
            var country = post.country;
            var city = post.city;
            var capacity = post.capacity;
            var fieldsize = post.fieldsize;
            var info = post.info;
            var image = post.image;

            var postObj = {
                id: id,
                name: name,
                country: country,
                city: city,
                capacity: capacity,
                fieldsize: fieldsize,
                info: info,
                image: image
            };

            allPostsArr.push(postObj);

            loadPosts(allPostsArr);
        });
    }
}).notFound(function () {
    return _templates.templates.getPage('error404', {});
}).resolve();

function loadPosts(data) {
    _templates.templates.getPage('post', data);
}