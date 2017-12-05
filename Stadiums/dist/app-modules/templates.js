'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.templates = undefined;

require('jquery');

var templates = function () {
    function getPage(pageName, data) {
        var url = 'templates/' + pageName + '.handlebars';
        return $.get(url, function (html) {
            var hbTemplate = Handlebars.compile(html.toString());
            $('#content').html(hbTemplate(data));
        });
    }
    return {
        getPage: getPage
    };
}();

exports.templates = templates;