const express = require('express');
const router = express.Router();

const {home, destinos, detail, guardar} = require('../controllers/indexController')

/* GET home page. */
router.get('/', home)
router.get('/destinos', destinos)

router.get('/detail/:idDestino', detail)

router.get('/guardar', guardar)

module.exports = router;
