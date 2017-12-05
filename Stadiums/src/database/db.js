import 'jquery';

const stadiumsDatabase = (function() {
    const MAIN_API_URL = `https://polar-caverns-22506.herokuapp.com`;

    function getByStars(stars) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `${MAIN_API_URL}/${stars}`,
                method: 'GET',
                crossDomain: true,
            })
            .done(resolve)
            .fail(reject);
        });
    }

    function getByStarsandId(stars, id) {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: `${MAIN_API_URL}/${stars}/${id}`,
                method: 'GET',
                crossDomain: true,
            })
            .done(resolve)
            .fail(reject);
        });
    }

    return {
        getByStars,
        getByStarsandId,
    };
}());

export { stadiumsDatabase };
