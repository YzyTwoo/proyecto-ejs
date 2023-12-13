const path = require('path');
const fs = require('fs');

const destinosPathFile = path.join(__dirname, '../database/destinos.json');
const destinosReadFile = fs.readFileSync(destinosPathFile, 'utf-8');
const destinos = JSON.parse(destinosReadFile);

let indexController = {
    home : function(req, res, next) {
        res.render('index', {title: 'SouthWest', destinos});
    }
};

module.exports = indexController;