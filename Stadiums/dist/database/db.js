'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.stadiumsDatabase = undefined;

require('jquery');

var stadiumsDatabase = function () {
    var MAIN_API_URL = 'https://polar-caverns-22506.herokuapp.com';

    function getByStars(stars) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: MAIN_API_URL + '/' + stars,
                method: 'GET',
                crossDomain: true
            }).done(resolve).fail(reject);
        });
    }

    function getByStarsandId(stars, id) {
        return new Promise(function (resolve, reject) {
            $.ajax({
                url: MAIN_API_URL + '/' + stars + '/' + id,
                method: 'GET',
                crossDomain: true
            }).done(resolve).fail(reject);
        });
    }

    return {
        getByStars: getByStars,
        getByStarsandId: getByStarsandId
    };
}();

exports.stadiumsDatabase = stadiumsDatabase;