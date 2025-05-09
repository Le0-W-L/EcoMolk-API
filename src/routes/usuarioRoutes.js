const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');
const verifyToken = require('../middleware/verify-token');

router.post('/login', usuarioController.login);
router.post('/cadastrar', usuarioController.cadastrar);
router.get('/dados', verifyToken, usuarioController.dadosUsuario);
router.get('/outsiders', verifyToken, usuarioController.outrosUsuarios);
router.post('/logout', verifyToken, usuarioController.logout);

module.exports = router;