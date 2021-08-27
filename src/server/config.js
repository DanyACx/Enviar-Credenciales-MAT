const express = require('express');
const path = require('path');
const routes = require('../routes/index');
const morgan = require('morgan');

module.exports = app => {
    app.set('port', process.env.PORT);

    // configuramos ejs
    app.set('views', path.join(__dirname, '..', 'views'))
    app.set('view engine', 'ejs')

    app.use(morgan('dev'));
    app.use(express.urlencoded({extended: false}));
    app.use(express.json());
    app.use(express.static('src/public'));

    routes(app)

    return app;
}
