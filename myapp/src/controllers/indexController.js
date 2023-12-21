const {leerArchivo} = require('../database/dbLogica.js');
// TRIM( ) SACA LOS ESPACIOS DEL PRINCIPIO Y DEL FINAL
const path = require('path');
const fs = require('fs');

let indexController = {
    home: function(req, res, next) {
        destinos = leerArchivo('destinos')
        res.render('home', {
            title: 'SouthWest',
            destinos
        });
    },
};

module.exports = indexController;