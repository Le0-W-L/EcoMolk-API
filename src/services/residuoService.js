const Residuos = require('../models/residuos');
const Users = require('../models/users');

exports.criarResiduo = async (req) => {
  const { tipo, descricao, quantidade, forma_descarte, tipo_entrega } = req.body;
  const imagemResiduo = req.file ? req.file.buffer : null;

  const novo = await Residuos.create({
    id_usuario: req.usuario.id,
    tipo,
    descricao,
    quantidade,
    forma_descarte,
    tipo_entrega,
    imagem_residuo: imagemResiduo
  });

  return {
    status: 200,
    data: { message: 'Resíduo cadastrado com sucesso', residuo: novo }
  };
};

exports.listarResiduosDoUsuario = async (userId) => {
  const residuos = await Residuos.findAll({ where: { id_usuario: userId } });

  const formatados = await Promise.all(residuos.map(async (r) => {
    let nomeEmpresa = 'Sem registro';
    if (r.id_usuario_interessado) {
      const interessado = await Users.findByPk(r.id_usuario_interessado);
      nomeEmpresa = interessado?.nome_empresa || nomeEmpresa;
    }

    return {
      ...r.toJSON(),
      nome_empresa_interessada: nomeEmpresa
    };
  }));

  return {
    status: 200,
    data: { message: 'Resíduos listados com sucesso', residuos: formatados }
  };
};

exports.listarResiduosDeOutrosUsuarios = async (userId) => {
  const residuos = await Residuos.findAll({
    where: { status_residuo: 'disponivel' },
    include: [{ model: Users, as: 'usuario', attributes: ['nome_empresa'] }]
  });

  const filtrados = residuos.filter(r => r.id_usuario !== userId);

  return {
    status: 200,
    data: { message: 'Resíduos de outros usuários listados', residuos: filtrados }
  };
};

exports.conectarResiduo = async (userId, residuoId) => {
  const dataEntrega = new Date();
  dataEntrega.setDate(dataEntrega.getDate() + 15);

  const [atualizado] = await Residuos.update({
    id_usuario_interessado: userId,
    status_residuo: 'negociando',
    data_entrega: dataEntrega
  }, {
    where: { id: residuoId }
  });

  if (!atualizado) {
    return { status: 404, data: { message: 'Resíduo não encontrado.' } };
  }

  return {
    status: 200,
    data: { message: 'Conexão com o resíduo realizada com sucesso.' }
  };
};

exports.atualizarStatus = async (id, novoStatus) => {
  if (!['disponivel', 'negociando', 'concluido', 'cancelado'].includes(novoStatus)) {
    return { status: 400, data: { message: 'Status inválido' } };
  }

  const [updated] = await Residuos.update({ status_residuo: novoStatus }, { where: { id } });

  if (!updated) {
    return { status: 404, data: { message: 'Resíduo não encontrado ou não atualizado.' } };
  }

  return {
    status: 200,
    data: { message: 'Status atualizado com sucesso' }
  };
};