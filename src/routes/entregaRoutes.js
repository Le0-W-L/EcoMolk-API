const express = require('express');
const router = express.Router();
const entregaController = require('../controllers/entregaController');
const verifyToken = require('../middleware/verify-token');

router.get('/negociando', verifyToken, entregaController.entregasNegociando);
router.get('/empresa', verifyToken, entregaController.nomeEmpresaUsuario);

module.exports = router;