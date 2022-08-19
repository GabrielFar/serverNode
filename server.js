const express = require("express")
const cors = require("cors")

const app = express()

app.use(function(req, resp, next){
    resp.header("Access-Control-Allow-Origin", "*")
    app.use(cors())
    next()
})

const porta = 3000
app.listen(porta, function () {
    console.log(`Servidor rodando na porta ${porta}`);
})

app.get("/users",async function (req, resp){
    resp.send(await getUsers())
})

app.get("/users/:userId",async function (req, resp){
    let userId = req.params.userId

    let users = await getUsers(userId)
        
    if (users.length >= 2) {
        resp.send([{erro: 'usuário inválido'}])
    } else {
        resp.send(users)
    }    
})

function getUsers(user) {
    usuários = [{userId: 'XPTO-07', password: 'Trocar@007', tipo: 'admin'}, 
                {userId: 'XPTO-09', password: 'Trocar@009', tipo: 'dev'},
                {userId: 'XPTO-12', password: 'Trocar@012', tipo: 'dba'}, 
                {userId: 'XPTO-02', password: 'Trocar@002', tipo: 'dev'}]

    let retronarArray = 0
    let indexUserSelected

    for (let index = 0; index < usuários.length; index++) {
        if (user !== usuários[index].userId) {
            retronarArray++
        } else {
            indexUserSelected = index
            retronarArray = 0
            index = usuários.lenght
        }
    }

    if (retronarArray >= 1) {
        return usuários
    } else {
        return usuários[indexUserSelected]
    }
}