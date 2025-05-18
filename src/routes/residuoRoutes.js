const express = require('express');
const router = express.Router();
const residuoController = require('../controllers/residuoController');
const verifyToken = require('../middleware/verify-token');
const upload = require('../middleware/image-upload');

router.post('/cadastrar', verifyToken, upload.single('imagem_residuo'), residuoController.criarResiduo);
router.get('/seus', verifyToken, residuoController.listarResiduosDoUsuario);
router.get('/outsiders', verifyToken, residuoController.listarResiduosDeOutrosUsuarios);
router.post('/conectar', verifyToken, residuoController.conectarResiduo);
router.put('/atualizar/:id', verifyToken, residuoController.atualizarStatus);

module.exports = router;