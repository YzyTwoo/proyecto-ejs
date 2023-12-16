const {leerArchivo, guardarArchivo} = require('../database/dbLogica.js');

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

    destinos: (req, res, next) => {
        res.render('destinos',{
            title: 'Destinos',
            destinos
        });
    },

    detail : (req, res, next) => {
        let id = req.params.idDestino
        destinos = leerArchivo('destinos')
        destino = destinos[id-1]
        console.log(destino)
        res.render('detail',{
            title: 'el titulo',
            destino,
        })
    },

    guardar: (req, res, next) => {
        let archivo = leerArchivo('destinos')
        let newDato = {
            "id": "13",
            "nombre": "Pakistan",
            "imagen": "pakistan.jpeg",
            "precio": "20.000"   
        }

        let newArchivo = [...archivo,newDato]

        guardarArchivo(newArchivo, 'destinos');

        res.send(newArchivo)
    },

};

module.exports = indexController;