const express = require('express');
const router = express.Router();

const {destinos, detail, guardar, editForm} = require('../controllers/destinosController')

/* GET home page. */
router.get('/', destinos)

router.get('/detail/:idDestino', detail)

router.get('/editar', editForm)

module.exports = router;
