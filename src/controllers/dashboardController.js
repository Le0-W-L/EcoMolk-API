const dashboardService = require("../services/dashboardService");

exports.totalParceiros = async (req, res) => {
  const result = await dashboardService.totalParceiros(req.session.userId);
  res.status(result.status).json(result.data);
};

exports.residuosDisponiveis = async (req, res) => {
  const result = await dashboardService.residuosDisponiveis(req.session.userId);
  res.status(result.status).json(result.data);
};

exports.residuosNegociando = async (req, res) => {
  const result = await dashboardService.residuosNegociando(req.session.userId);
  res.status(result.status).json(result.data);
};

exports.residuosConcluidos = async (req, res) => {
  const result = await dashboardService.residuosConcluidos(req.session.userId);
  res.status(result.status).json(result.data);
};

exports.residuosCancelados = async (req, res) => {
  const result = await dashboardService.residuosCancelados(req.session.userId);
  res.status(result.status).json(result.data);
};

exports.totalResiduos = async (req, res) => {
  const result = await dashboardService.totalResiduos(req.session.userId);
  res.status(result.status).json(result.data);
};

exports.tiposQuantidade = async (req, res) => {
  const result = await dashboardService.tiposQuantidade(req.session.userId);
  res.status(result.status).json(result.data);
};

exports.empresaMaisResiduos = async (req, res) => {
  const result = await dashboardService.empresaMaisResiduos(req.session.userId);
  res.status(result.status).json(result.data);
};

exports.empresaMaisInteresse = async (req, res) => {
  const result = await dashboardService.empresaMaisInteresse(
    req.session.userId
  );
  res.status(result.status).json(result.data);
};

exports.porcentagemConcluidos = async (req, res) => {
  const result = await dashboardService.porcentagemConcluidos(
    req.session.userId
  );
  res.status(result.status).json(result.data);
};

exports.interessesResiduos = async (req, res) => {
  const result = await dashboardService.interessesResiduos(req.session.userId);
  res.status(result.status).json(result.data);
};