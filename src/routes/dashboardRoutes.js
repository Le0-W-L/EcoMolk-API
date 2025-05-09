const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const verificaLogin = require('../middleware/verify-token');

router.get('/total-parceiros', verificaLogin, dashboardController.totalParceiros);
router.get('/residuos-disponiveis', verificaLogin, dashboardController.residuosDisponiveis);
router.get('/residuos-negociando', verificaLogin, dashboardController.residuosNegociando);
router.get('/residuos-concluidos', verificaLogin, dashboardController.residuosConcluidos);
router.get('/residuos-cancelados', verificaLogin, dashboardController.residuosCancelados);
router.get('/residuos-total', verificaLogin, dashboardController.totalResiduos);
router.get('/residuos-tipos-quantidade', verificaLogin, dashboardController.tiposQuantidade);
router.get('/empresa-mais-residuos', verificaLogin, dashboardController.empresaMaisResiduos);
router.get('/empresa-mais-interesse', verificaLogin, dashboardController.empresaMaisInteresse);
router.get('/residuos-porcentagem-concluidos', verificaLogin, dashboardController.porcentagemConcluidos);
router.get('/interesses-residuos', verificaLogin, dashboardController.interessesResiduos);

module.exports = router;