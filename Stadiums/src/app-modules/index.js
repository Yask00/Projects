import 'jquery';
import 'bootstrap';
import { stadiumsDatabase } from 'stadiumsDatabase';

// Templates
import { templates } from 'templates';

// Pages
import { homeController } from 'homeController';

import { fiveStarsController } from 'fiveStarsController';
import { fourStarsController } from 'fourStarsController';
import { threeStarsController } from 'threeStarsController';

const router = new Navigo(null, false, '#!');

router
    .on(() => homeController())
    .on({
        '/#/fivestars': () => fiveStarsController(),
        '/#/fourstars': () => fourStarsController(),
        '/#/threestars': () => threeStarsController(),
        '/#/fivestars/:id': (params) => {
            const allPostsArr = [];

            stadiumsDatabase.getByStarsandId(`fivestars`, params.id)
                .then((post) => {
                    const id = post._id;
                    const name = post.name;
                    const country = post.country;
                    const city = post.city;
                    const capacity = post.capacity;
                    const fieldsize = post.fieldsize;
                    const info = post.info;
                    const image = post.image;


                    const postObj = {
                        id: id,
                        name: name,
                        country: country,
                        city: city,
                        capacity: capacity,
                        fieldsize: fieldsize,
                        info: info,
                        image: image,
                    };

                    allPostsArr.push(postObj);


                    loadPosts(allPostsArr);
                });
        },
        '/#/fourstars/:id': (params) => {
            const allPostsArr = [];

            stadiumsDatabase.getByStarsandId(`fourstars`, params.id)
                .then((post) => {
                    const id = post._id;
                    const name = post.name;
                    const country = post.country;
                    const city = post.city;
                    const capacity = post.capacity;
                    const fieldsize = post.fieldsize;
                    const info = post.info;
                    const image = post.image;


                    const postObj = {
                        id: id,
                        name: name,
                        country: country,
                        city: city,
                        capacity: capacity,
                        fieldsize: fieldsize,
                        info: info,
                        image: image,
                    };

                    allPostsArr.push(postObj);


                    loadPosts(allPostsArr);
                });
        },
        '/#/threestars/:id': (params) => {
            const allPostsArr = [];

            stadiumsDatabase.getByStarsandId(`threestars`, params.id)
                .then((post) => {
                    const id = post._id;
                    const name = post.name;
                    const country = post.country;
                    const city = post.city;
                    const capacity = post.capacity;
                    const fieldsize = post.fieldsize;
                    const info = post.info;
                    const image = post.image;


                    const postObj = {
                        id: id,
                        name: name,
                        country: country,
                        city: city,
                        capacity: capacity,
                        fieldsize: fieldsize,
                        info: info,
                        image: image,
                    };

                    allPostsArr.push(postObj);


                    loadPosts(allPostsArr);
                });
        },
    })
    .notFound(() => templates.getPage('error404', {}))
    .resolve();


function loadPosts(data) {
    templates.getPage('post', data);
}
