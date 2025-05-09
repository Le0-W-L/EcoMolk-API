const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const verificaLogin = require('../middleware/verify-token');

router.post('/login', usuarioController.login);
router.post('/cadastrar', usuarioController.cadastrar);
router.get('/dados', verificaLogin, usuarioController.dadosUsuario);
router.get('/outsiders', verificaLogin, usuarioController.outrosUsuarios);
router.post('/logout', usuarioController.logout);

module.exports = router;