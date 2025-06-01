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

// Resíduos disponíveis do próprio usuário
exports.meusResiduosDisponiveis = async (req, res) => {
  try {
    const result = await dashboardService.meusResiduosDisponiveis(req.usuario.id);
    res.status(result.status).json(result.data);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erro ao buscar meus resíduos disponíveis.",
        error: error.message,
      });
  }
};

// Resíduos negociando do próprio usuário
exports.meusResiduosNegociando = async (req, res) => {
  try {
    const result = await dashboardService.meusResiduosNegociando(req.usuario.id);
    res.status(result.status).json(result.data);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erro ao buscar meus resíduos negociando.",
        error: error.message,
      });
  }
};

// Resíduos concluídos do próprio usuário
exports.meusResiduosConcluidos = async (req, res) => {
  try {
    const result = await dashboardService.meusResiduosConcluidos(req.usuario.id);
    res.status(result.status).json(result.data);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erro ao buscar meus resíduos concluídos.",
        error: error.message,
      });
  }
};

// Resíduos cancelados do próprio usuário
exports.meusResiduosCancelados = async (req, res) => {
  try {
    const result = await dashboardService.meusResiduosCancelados(req.usuario.id);
    res.status(result.status).json(result.data);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erro ao buscar meus resíduos cancelados.",
        error: error.message,
      });
  }
};

// Total de resíduos do próprio usuário
exports.meusTotalResiduos = async (req, res) => {
  try {
    const result = await dashboardService.meusTotalResiduos(req.usuario.id);
    res.status(result.status).json(result.data);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erro ao buscar total dos meus resíduos.",
        error: error.message,
      });
  }
};

// Tipos e quantidade de resíduos do próprio usuário
exports.meusTiposQuantidade = async (req, res) => {
  try {
    const result = await dashboardService.meusTiposQuantidade(req.usuario.id);
    res.status(result.status).json(result.data);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erro ao buscar tipos e quantidade dos meus resíduos.",
        error: error.message,
      });
  }
};

// Porcentagem de resíduos concluídos do próprio usuário
exports.meusPorcentagemConcluidos = async (req, res) => {
  try {
    const result = await dashboardService.meusPorcentagemConcluidos(req.usuario.id);
    res.status(result.status).json(result.data);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erro ao buscar porcentagem dos meus resíduos concluídos.",
        error: error.message,
      });
  }
};

// Empresas com mais interesse nos resíduos do próprio usuário
exports.empresasMaisInteresseNosMeusResiduos = async (req, res) => {
  try {
    const result = await dashboardService.empresasMaisInteresseNosMeusResiduos(req.usuario.id);
    res.status(result.status).json(result.data);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erro ao buscar empresas com mais interesse nos meus resíduos.",
        error: error.message,
      });
  }
};

// Meus resíduos (lista completa)
exports.meusResiduos = async (req, res) => {
  try {
    const result = await dashboardService.meusResiduos(req.usuario.id);
    res.status(result.status).json(result.data);
  } catch (error) {
    res
      .status(500)
      .json({
        message: "Erro ao buscar meus resíduos.",
        error: error.message,
      });
  }
};