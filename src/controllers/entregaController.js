const entregaService = require("../services/entregaService");

exports.entregasNegociando = async (req, res) => {
  try {
    const result = await entregaService.entregasNegociando(req.usuario.id);
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
    const result = await entregaService.nomeEmpresaUsuario(req.usuario.id);
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