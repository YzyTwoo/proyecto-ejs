const {leerArchivo, guardarArchivo} = require('../database/dbLogica.js');

// TRIM( ) SACA LOS ESPACIOS DEL PRINCIPIO Y DEL FINAL

const path = require('path');
const fs = require('fs');

let destinosControllers = {

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

    editForm: (req, res, next) => {
        res.render('editar', {title: 'el titulo'})
    },

    guardar: (req, res, next) => {
        let archivo = leerArchivo('destinos')
        const {id} = req.params
        const {nombre, imagen, precio} = req.body

        let newDato = {
            id,
            nombre: nombre.trim(),
            imagen,
            precio: precio.trim()
        }

        let newArchivo = [...archivo,newDato]

        guardarArchivo(newArchivo, 'destinos');

        res.send(newArchivo)
    },

};

module.exports = destinosControllers;