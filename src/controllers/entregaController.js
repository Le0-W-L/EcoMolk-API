const entregaService = require("../services/entregaService");

exports.entregasNegociando = async (req, res) => {
  try {
    const result = await entregaService.entregasNegociando(req.session.userId);
    res.status(result.status).json(result.data);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erro ao buscar entregas negociando.",
        error: error.message,
      });
  }
};

exports.nomeEmpresaUsuario = async (req, res) => {
  try {
    const result = await entregaService.nomeEmpresaUsuario(req.session.userId);
    res.status(result.status).json(result.data);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erro ao buscar nome da empresa.",
        error: error.message,
      });
  }
};