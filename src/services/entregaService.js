const Residuos = require("../models/residuos");
const Users = require("../models/users");
const { Op } = require("sequelize");

exports.entregasNegociando = async (userId) => {
  const entregas = await Residuos.findAll({
    where: {
      status_residuo: "negociando",
      [Op.or]: [{ id_usuario: userId }, { id_usuario_interessado: userId }],
    },
    attributes: ["tipo", "tipo_entrega", "data_entrega"],
  });

  return {
    status: 200,
    data: entregas,
  };
};

exports.nomeEmpresaUsuario = async (userId) => {
  const user = await Users.findOne({ where: { id: userId } });

  if (!user || !user.nome_empresa) {
    return { status: 404, data: { message: "Empresa não encontrada" } };
  }

  return {
    status: 200,
    data: { nome_empresa: user.nome_empresa },
  };
};