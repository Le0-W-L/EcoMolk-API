const residuoService = require("../services/residuoService");

exports.criarResiduo = async (req, res) => {
  try {
    const result = await residuoService.criarResiduo(req);
    res.status(result.status).json(result.data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro no controller.", error: error.message });
  }
};

exports.listarResiduosDoUsuario = async (req, res) => {
  try {
    const result = await residuoService.listarResiduosDoUsuario(
      req.session.userId
    );
    res.status(result.status).json(result.data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao listar resíduos.", error: error.message });
  }
};

exports.listarResiduosDeOutrosUsuarios = async (req, res) => {
  try {
    const result = await residuoService.listarResiduosDeOutrosUsuarios(
      req.session.userId
    );
    res.status(result.status).json(result.data);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erro ao listar resíduos externos.",
        error: error.message,
      });
  }
};

exports.conectarResiduo = async (req, res) => {
  try {
    const result = await residuoService.conectarResiduo(
      req.session.userId,
      req.body.residuoId
    );
    res.status(result.status).json(result.data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao conectar resíduo.", error: error.message });
  }
};

exports.atualizarStatus = async (req, res) => {
  try {
    const result = await residuoService.atualizarStatus(
      req.params.id,
      req.body.novoStatus
    );
    res.status(result.status).json(result.data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao atualizar status.", error: error.message });
  }
};