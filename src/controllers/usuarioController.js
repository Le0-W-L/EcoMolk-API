const usuarioService = require("../services/usuarioService");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.login = async (req, res) => {
  try {
    const { email, senha } = req.body;
    const result = await usuarioService.login(email, senha);

    if (result.status !== 200) {
      return res.status(result.status).json(result.data);
    }

    const token = jwt.sign(
      {
        id: result.data.usuario.id,
        nome_empresa: result.data.usuario.nome_empresa,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    return res.status(200).json({
      message: "Login bem sucedido.",
      token,
      usuario: result.data.usuario,
    });
  } catch (error) {
    res.status(500).json({ message: "Erro no login.", error: error.message });
  }
};

exports.cadastrar = async (req, res) => {
  try {
    const { nome, email, senha, telefone, nome_empresa } = req.body;
    const result = await usuarioService.cadastrar({
      nome,
      email,
      senha,
      telefone,
      nome_empresa,
    });
    res.status(result.status).json(result.data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro no cadastro.", error: error.message });
  }
};

exports.dadosUsuario = async (req, res) => {
  try {
    const result = await usuarioService.dadosUsuario(req.usuario.id);
    res.status(result.status).json(result.data);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Erro ao buscar dados.", error: error.message });
  }
};

exports.outrosUsuarios = async (req, res) => {
  try {
    const result = await usuarioService.outrosUsuarios(req.usuario.id);
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
