import { templates } from 'templates';
import 'bootstrap';

const homeController = function() {
    templates.getPage('home', {})
        .done();
};

export { homeController };
