var ObjectID = require('mongodb').ObjectID;

module.exports = function (app, db) {

    // cross origin problem
    app.all('/', (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();
    });

    // 5 Stars
    app.post('/fivestars', (req, res) => {
        let stadium = { 
           name: req.body.name, // mlab "text": "WHat a great one"
           country: req.body.country, 
           city: req.body.city, 
           capacity: req.body.capacity, 
           fieldsize: req.body.fieldsize, 
           info: req.body.info,
           image: req.body.image
        };

        db.collection('fivestars').insert(stadium, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred uploading stadium',});
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    app.get('/fivestars', (req, res) => {

        db.collection('fivestars').find().toArray((err, items) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(items);
            }
        });
    });

    app.get('/fivestars/:id', (req, res) => {

        const id = req.params.id;

        const details = { '_id': new ObjectID(id) };

        db.collection('fivestars').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    });

    // 4 Stars
    app.post('/fourstars', (req, res) => {
        let stadium = { 
           name: req.body.name, // mlab "text": "WHat a great one"
           country: req.body.country, 
           city: req.body.city, 
           capacity: req.body.capacity, 
           fieldsize: req.body.fieldsize, 
           info: req.body.info,
           image: req.body.image
        };
        
        db.collection('fourstars').insert(stadium, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred uploading stadium',});
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    app.get('/fourstars', (req, res) => {

        db.collection('fourstars').find().toArray((err, items) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(items);
            }
        });
    });

    app.get('/fourstars/:id', (req, res) => {

        const id = req.params.id;

        const details = { '_id': new ObjectID(id) };

        db.collection('fourstars').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    });


    // 3 Stars

    app.post('/threestars', (req, res) => {
        let stadium = { 
           name: req.body.name, // mlab "text": "WHat a great one"
           country: req.body.country, 
           city: req.body.city, 
           capacity: req.body.capacity, 
           fieldsize: req.body.fieldsize, 
           info: req.body.info,
           image: req.body.image
        };
        
        db.collection('threestars').insert(stadium, (err, result) => {
            if (err) {
                res.send({ 'error': 'An error has occurred uploading stadium',});
            } else {
                res.send(result.ops[0]);
            }
        });
    });

    app.get('/threestars', (req, res) => {

        db.collection('threestars').find().toArray((err, items) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(items);
            }
        });
    });

    app.get('/threestars/:id', (req, res) => {

        const id = req.params.id;

        const details = { '_id': new ObjectID(id) };

        db.collection('threestars').findOne(details, (err, item) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' });
            } else {
                res.send(item);
            }
        });
    });
};