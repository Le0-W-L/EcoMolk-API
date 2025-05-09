//MIDDLEWARE PARA VERIFICAR SE O USUÁRIO ESTÁ LOGADO
function verificaLogin(req, res, next) {
    
    //VERIFICA SE O ID DO USUÁRIO ESTA SALVO NA SESSÃO
    if(req.session.userId) {
        return next()
    }

    else{
        //RETORNA UMA MENSAGEM DE ERRO
        return res.status(401).json({ message: 'Acesso negado. Faça login para continuar.' })
    }
}

module.exports = verificaLogin