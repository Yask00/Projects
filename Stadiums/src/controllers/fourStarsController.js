import { templates } from 'templates';
import 'bootstrap';
import { stadiumsDatabase } from 'stadiumsDatabase';

const fourStarsController = function() {
    const allPostsArr = [];

    stadiumsDatabase.getByStars(`fourstars`)
        .then((posts) => {
            posts.forEach((post) => {
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
            });
        loadPosts(allPostsArr);
    });
};

function loadPosts(data) {
    templates.getPage('fourStars', data);
}

export { fourStarsController };
