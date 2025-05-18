const sequelize = require('./database')

async function conn() {

    try {
        await sequelize.authenticate(); 
        console.log('Conexão estabelecida com sucesso.')

        await sequelize.sync({ force: true }) //{force: false} --> GARANTE QUE AS TABELAS JA EXISTENTES NÃO SEJAM SOBRESCRITAS
        console.log('Tabelas sincronizadas com sucesso.')
    }

    catch (error) {
        console.error('Erro na conexão: ', error)
    }

}

module.exports = conn; 