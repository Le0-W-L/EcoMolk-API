const usuarioService = require("../services/usuarioService");

exports.login = async (req, res) => {
  try {
    const { email, senha } = req.body;
    const result = await usuarioService.login(email, senha, req);
    res.status(result.status).json(result.data);
  } catch (error) {
    res.status(500).json({ message: "Erro no login.", error: error.message });
  }
};

exports.cadastrar = async (req, res) => {
  try {
    const result = await usuarioService.cadastrar(req.body);
    res.status(result.status).json(result.data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro no cadastro.", error: error.message });
  }
};

exports.dadosUsuario = async (req, res) => {
  try {
    const result = await usuarioService.dadosUsuario(req.session.userId);
    res.status(result.status).json(result.data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao buscar dados.", error: error.message });
  }
};

exports.outrosUsuarios = async (req, res) => {
  try {
    const result = await usuarioService.outrosUsuarios(req.session.userId);
    res.status(result.status).json(result.data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao listar usuários.", error: error.message });
  }
};

exports.logout = async (req, res) => {
  try {
    const result = await usuarioService.logout(req);
    res.status(result.status).json(result.data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao fazer logout.", error: error.message });
  }
};