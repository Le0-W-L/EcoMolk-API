const residuoService = require("../services/residuoService");

exports.criarResiduo = async (req, res) => {
  try {
    const result = await residuoService.criarResiduo(req.body, req.usuario.id, req.file);
    res.status(result.status).json(result.data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao criar resíduo.", error: error.message });
  }
};

exports.listarResiduosDoUsuario = async (req, res) => {
  try {
    const result = await residuoService.listarResiduosDoUsuario(req.usuario.id);
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
      req.usuario.id
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
      req.usuario.id,
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