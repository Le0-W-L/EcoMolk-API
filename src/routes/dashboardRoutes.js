const express = require('express');
const router = express.Router();
const dashboardController = require('../controllers/dashboardController');
const verifyToken = require('../middleware/verify-token');

router.get('/total-parceiros', verifyToken, dashboardController.totalParceiros);
router.get('/residuos-disponiveis', verifyToken, dashboardController.residuosDisponiveis);
router.get('/residuos-negociando', verifyToken, dashboardController.residuosNegociando);
router.get('/residuos-concluidos', verifyToken, dashboardController.residuosConcluidos);
router.get('/residuos-cancelados', verifyToken, dashboardController.residuosCancelados);
router.get('/residuos-total', verifyToken, dashboardController.totalResiduos);
router.get('/residuos-tipos-quantidade', verifyToken, dashboardController.tiposQuantidade);
router.get('/empresa-mais-residuos', verifyToken, dashboardController.empresaMaisResiduos);
router.get('/empresa-mais-interesse', verifyToken, dashboardController.empresaMaisInteresse);
router.get('/residuos-porcentagem-concluidos', verifyToken, dashboardController.porcentagemConcluidos);
router.get('/interesses-residuos', verifyToken, dashboardController.interessesResiduos);

module.exports = router;