const dashboardService = require("../services/dashboardService");

exports.totalParceiros = async (req, res) => {
  try {
    const result = await dashboardService.totalParceiros(req.usuario.id);
    res.status(result.status).json(result.data);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erro ao buscar total de parceiros.",
        error: error.message,
      });
  }
};

exports.residuosDisponiveis = async (req, res) => {
  try {
    const result = await dashboardService.residuosDisponiveis(req.usuario.id);
    res.status(result.status).json(result.data);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erro ao buscar resíduos disponíveis.",
        error: error.message,
      });
  }
};

exports.residuosNegociando = async (req, res) => {
  try {
    const result = await dashboardService.residuosNegociando(req.usuario.id);
    res.status(result.status).json(result.data);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erro ao buscar resíduos negociando.",
        error: error.message,
      });
  }
};

exports.residuosConcluidos = async (req, res) => {
  try {
    const result = await dashboardService.residuosConcluidos(req.usuario.id);
    res.status(result.status).json(result.data);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erro ao buscar resíduos concluídos.",
        error: error.message,
      });
  }
};

exports.residuosCancelados = async (req, res) => {
  try {
    const result = await dashboardService.residuosCancelados(req.usuario.id);
    res.status(result.status).json(result.data);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erro ao buscar resíduos cancelados.",
        error: error.message,
      });
  }
};

exports.totalResiduos = async (req, res) => {
  try {
    const result = await dashboardService.totalResiduos(req.usuario.id);
    res.status(result.status).json(result.data);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erro ao buscar total de resíduos.",
        error: error.message,
      });
  }
};

exports.tiposQuantidade = async (req, res) => {
  try {
    const result = await dashboardService.tiposQuantidade(req.usuario.id);
    res.status(result.status).json(result.data);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erro ao buscar tipos e quantidade de resíduos.",
        error: error.message,
      });
  }
};

exports.empresaMaisResiduos = async (req, res) => {
  try {
    const result = await dashboardService.empresaMaisResiduos(req.usuario.id);
    res.status(result.status).json(result.data);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erro ao buscar empresa com mais resíduos.",
        error: error.message,
      });
  }
};

exports.empresaMaisInteresse = async (req, res) => {
  try {
    const result = await dashboardService.empresaMaisInteresse(req.usuario.id);
    res.status(result.status).json(result.data);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erro ao buscar empresa com mais interesse.",
        error: error.message,
      });
  }
};

exports.porcentagemConcluidos = async (req, res) => {
  try {
    const result = await dashboardService.porcentagemConcluidos(req.usuario.id);
    res.status(result.status).json(result.data);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erro ao buscar porcentagem de resíduos concluídos.",
        error: error.message,
      });
  }
};

exports.interessesResiduos = async (req, res) => {
  try {
    const result = await dashboardService.interessesResiduos(req.usuario.id);
    res.status(result.status).json(result.data);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erro ao buscar interesses de resíduos.",
        error: error.message,
      });
  }
};