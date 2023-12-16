const path = require('path');
const fs = require('fs');

// HAY 2 TIPOS DE "FUNCIONES" UNAS SON FUNCIONES Y OTRAS SON PROCEDIMIENTOS.
// las funciones son aquellas que retornan un dato.
// las funciones de procedimiento no retornan nada, solo tiene que hacer un procedimiento.

// FUNCIÓN
const leerArchivo = (nameFile)=>{
    let destinosFilePath = path.join(__dirname, '../database', nameFile + '.json'); //es la ruta necesaria para ubicar el .JSON
    let destinos = JSON.parse(fs.readFileSync(destinosFilePath, 'utf-8')); //Lee y Transforma el .JSON en array de objetos
    return destinos //Retorna la lectura y la transformación de JSON a array de objetos -->
}
// PROCEDIMIENTO
const guardarArchivo = (newArray, nameFile)=>{
    const pathFile = path.join(__dirname, '../database/', nameFile + '.json'); //es la ruta necesaria para ubicar el .JSON
    let datosjson = JSON.stringify(newArray); //transforma array de objetos a JSON
    fs.writeFileSync(pathFile, datosjson, 'utf-8'); //carga el nuevo objeto al JSON
}


module.exports = {leerArchivo, guardarArchivo}