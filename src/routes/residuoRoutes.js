const express = require('express');
const router = express.Router();
const residuoController = require('../controllers/residuoController');
const verificaLogin = require('../middleware/verificaLogin');
const multer = require('multer');

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

router.post('/cadastrar', verificaLogin, upload.single('imagem-residuo'), residuoController.criarResiduo);
router.get('/seus', verificaLogin, residuoController.listarResiduosDoUsuario);
router.get('/outsiders', verificaLogin, residuoController.listarResiduosDeOutrosUsuarios);
router.post('/conectar', verificaLogin, residuoController.conectarResiduo);
router.put('/atualizar/:id', verificaLogin, residuoController.atualizarStatus);

module.exports = router;