const bcrypt = require("bcrypt");
const Users = require("../models/users");

exports.login = async (email, senha) => {
  const user = await Users.findOne({ where: { email } });

  if (!user) {
    return {
      status: 404,
      data: { message: "E-mail não encontrado." },
    };
  }

  const senhaCorreta = await bcrypt.compare(senha, user.senha);

  if (!senhaCorreta) {
    return {
      status: 401,
      data: { message: "Senha incorreta." },
    };
  }

  // Se tudo ok, pode gerar token ou criar sessão
  return {
    status: 200,
    data: {
      message: "Login bem sucedido.",
      usuario: {
        id: user.id,
        nome_empresa: user.nome_empresa,
      },
    },
  };
};

exports.cadastrar = async ({ nome, email, senha, telefone, nome_empresa }) => {
  try {
    const hashedPassword = await bcrypt.hash(senha, 12);

    const newUser = await Users.create({
      nome,
      email,
      senha: hashedPassword,
      telefone,
      nome_empresa,
    });

    return {
      status: 201,
      data: {
        message: 'Usuário cadastrado com sucesso.',
        usuario: {
          id: newUser.id,
          nome: newUser.nome,
          email: newUser.email,
          nome_empresa: newUser.nome_empresa,
        },
      },
    };
  }
  catch (error) {
    return {
      status: 500,
      data: {
        message: 'Erro ao cadastrar usuário.',
        error: error.message,
      },
    };
  }
};

exports.dadosUsuario = async (userId) => {
  const usuario = await Users.findByPk(userId);

  if (!usuario) {
    return { status: 404, data: { message: "Usuário não encontrado." } };
  }

  const primeiroNome = usuario.nome.split(" ")[0];

  return {
    status: 200,
    data: {
      nome: primeiroNome,
      nome_empresa: usuario.nome_empresa,
    },
  };
};

exports.outrosUsuarios = async (userId) => {
  const usuarios = await Users.findAll({
    attributes: ["id", "nome_empresa", "nome", "email", "telefone"],
  });

  const filtrados = usuarios.filter((usuario) => usuario.id !== userId);

  return {
    status: 200,
    data: { message: "Usuários encontrados com sucesso.", usuarios: filtrados },
  };
};

exports.logout = async (req) => {
  if (req.session) {
    return new Promise((resolve, reject) => {
      req.session.destroy((err) => {
        if (err) {
          reject({
            status: 500,
            data: { message: "Erro ao encerrar a sessão." },
          });
        } else {
          resolve({
            status: 200,
            data: { message: "Logout realizado com sucesso." },
          });
        }
      });
    });
  } 
  else {
    return {
      status: 400,
      data: { message: "Nenhuma sessão ativa encontrada." },
    };
  }
};