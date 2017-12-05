'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.threeStarsController = undefined;

var _templates = require('templates');

require('bootstrap');

var _stadiumsDatabase = require('stadiumsDatabase');

var threeStarsController = function threeStarsController() {
    var allPostsArr = [];

    _stadiumsDatabase.stadiumsDatabase.getByStars('threestars').then(function (posts) {
        posts.forEach(function (post) {
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
        });
        loadPosts(allPostsArr);
    });
};

function loadPosts(data) {
    _templates.templates.getPage('threeStars', data);
}

exports.threeStarsController = threeStarsController;