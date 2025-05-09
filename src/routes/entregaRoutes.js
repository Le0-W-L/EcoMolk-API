const express = require('express');
const router = express.Router();
const entregaController = require('../controllers/entregaController');
const verificaLogin = require('../middleware/verificaLogin');

router.get('/negociando', verificaLogin, entregaController.entregasNegociando);
router.get('/empresa', verificaLogin, entregaController.nomeEmpresaUsuario);

module.exports = router;