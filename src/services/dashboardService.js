const Users = require("../models/users");
const Residuos = require("../models/residuos");
const sequelize = require("../config/database");
const { Op } = require("sequelize");

exports.totalParceiros = async (usuarioId) => {
  const total = await Users.count();
  const totalExcluindoAtual = total > 0 ? total - 1 : 0;

  return {
    status: 200,
    data: {
      message: "Total de parceiros cadastrados com sucesso.",
      total: totalExcluindoAtual,
    },
  };
};

exports.residuosDisponiveis = async (usuarioId) => {
  const countUsuario = await Residuos.count({
    where: {
      status_residuo: "disponivel",
      id_usuario: usuarioId,
    },
  });

  const countTotal = await Residuos.count({
    where: { status_residuo: "disponivel" },
  });

  return {
    status: 200,
    data: { quantidade: countTotal - countUsuario },
  };
};

exports.residuosNegociando = async (usuarioId) => {
  const countUsuario = await Residuos.count({
    where: {
      status_residuo: "negociando",
      id_usuario: usuarioId,
    },
  });

  const countTotal = await Residuos.count({
    where: { status_residuo: "negociando" },
  });

  return {
    status: 200,
    data: { quantidade: countTotal - countUsuario },
  };
};

exports.residuosConcluidos = async (usuarioId) => {
  const countUsuario = await Residuos.count({
    where: {
      status_residuo: "concluido",
      id_usuario: usuarioId,
    },
  });

  const countTotal = await Residuos.count({
    where: { status_residuo: "concluido" },
  });

  return {
    status: 200,
    data: { quantidade: countTotal - countUsuario },
  };
};

exports.residuosCancelados = async (usuarioId) => {
  const countUsuario = await Residuos.count({
    where: {
      status_residuo: "cancelado",
      id_usuario: usuarioId,
    },
  });

  const countTotal = await Residuos.count({
    where: { status_residuo: "cancelado" },
  });

  return {
    status: 200,
    data: { quantidade: countTotal - countUsuario },
  };
};

exports.totalResiduos = async (usuarioId) => {
  const total = await Residuos.count({
    where: { id_usuario: { [Op.ne]: usuarioId } },
  });

  return {
    status: 200,
    data: {
      message: "Total de resíduos cadastrados com sucesso.",
      total,
    },
  };
};

exports.tiposQuantidade = async (usuarioId) => {
  const tipos = await Residuos.findAll({
    attributes: [
      "tipo",
      [sequelize.fn("COUNT", sequelize.col("tipo")), "quantidade"],
    ],
    where: sequelize.where(sequelize.col("id_usuario"), "!=", usuarioId),
    group: ["tipo"],
    order: [[sequelize.literal("quantidade"), "DESC"]],
  });

  if (!tipos.length) {
    return {
      status: 404,
      data: { message: "Nenhum tipo de resíduo encontrado" },
    };
  }

  const formatado = tipos.map((t) => ({
    tipo: t.tipo,
    quantidade: t.get("quantidade"),
  }));

  return {
    status: 200,
    data: formatado,
  };
};

exports.empresaMaisResiduos = async (usuarioId) => {
  const resultado = await sequelize.query(
    `SELECT u.nome_empresa, COUNT(r.id) AS quantidade_residuos
     FROM residuos r
     INNER JOIN users u ON r.id_usuario = u.id
     WHERE r.id_usuario != :usuarioId
     GROUP BY u.nome_empresa
     ORDER BY quantidade_residuos DESC
     LIMIT 1`,
    {
      replacements: { usuarioId },
      type: sequelize.QueryTypes.SELECT,
    }
  );

  if (!resultado.length) {
    return {
      status: 404,
      data: { message: "Nenhuma empresa encontrada com resíduos." },
    };
  }

  return {
    status: 200,
    data: { empresa: resultado[0] },
  };
};

exports.empresaMaisInteresse = async (usuarioId) => {
  const resultado = await sequelize.query(
    `SELECT u.nome_empresa, COUNT(r.id_usuario_interessado) AS quantidade_interesse
     FROM residuos r
     INNER JOIN users u ON r.id_usuario_interessado = u.id
     WHERE r.id_usuario != :usuarioId AND r.id_usuario_interessado != :usuarioId
     GROUP BY u.nome_empresa
     ORDER BY quantidade_interesse DESC
     LIMIT 1`,
    {
      replacements: { usuarioId },
      type: sequelize.QueryTypes.SELECT,
    }
  );

  if (!resultado.length) {
    return {
      status: 404,
      data: { message: "Nenhuma empresa encontrada com interesse." },
    };
  }

  return {
    status: 200,
    data: { empresa: resultado[0] },
  };
};

exports.porcentagemConcluidos = async (usuarioId) => {
  const residuos = await sequelize.query(
    `SELECT r.status_residuo
     FROM residuos r
     WHERE r.id_usuario != :usuarioId`,
    {
      replacements: { usuarioId },
      type: sequelize.QueryTypes.SELECT,
    }
  );

  const total = residuos.length;
  const concluidos = residuos.filter(
    (r) => r.status_residuo === "concluido"
  ).length;
  const porcentagem = total > 0 ? (concluidos / total) * 100 : 0;

  return {
    status: 200,
    data: {
      porcentagemConcluidos: `${porcentagem.toFixed(1)}%`,
      totalResiduos: total,
      residuosConcluidos: concluidos,
    },
  };
};

exports.interessesResiduos = async (usuarioId) => {
  const residuos = await Residuos.findAll({
    where: { id_usuario_interessado: usuarioId },
  });

  if (!residuos.length) {
    return {
      status: 404,
      data: { message: "Nenhum resíduo encontrado para este usuário." },
    };
  }

  const completos = await Promise.all(
    residuos.map(async (r) => {
      const dono = await Users.findOne({
        where: { id: r.id_usuario },
        attributes: ["nome_empresa"],
      });

      return {
        ...r.toJSON(),
        nome_empresa_dona: dono ? dono.nome_empresa : "Sem registro",
      };
    })
  );

  return {
    status: 200,
    data: {
      message: "Resíduos encontrados com sucesso.",
      residuos: completos,
    },
  };
};