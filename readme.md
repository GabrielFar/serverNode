# Servidor para exercíciosAngular

## Descrição

- Servidor destinado a servir para projetos do repositório exercíciosAngular;

- Backend que retorna usuários de um banco de dados(por vir);

- Rotas do servidor:

    - Rota 1 - Tipo: GET, Rota: "/users", Response: lista/array de todos os usuários, obtidos pelo retorno da função getUsers();

    - Rota 2 - Tipo: GET, Rota: "/user/:userId", Response: array de usuários contendo apenas o usuário pretendido obtido pelo retorno da função getUsers(userId).

## Requisitos necessário para o projeto

- VS Code

- Npm atualizado;

- Node express;

- Cors Policy

## Como intalar e rodar o projeto

1. Clone este gitHub para alguma pasta vaziz ou que não possua arquivo .git;

    - Para clonagem, abra um prompt de comando na pasta desejada e digite "git clone https://github.com/GabrielFar/serverNode.git"

2. Entre na pasta raiz do projeto, e abra um prompt de comando;

3. Digite os seguintes comandos:

    - npm i node

    - npm i express

    - npm cors

4. Após instalada as dependências, digite "node server.js"

5. Abra em um navegador de sua escolha (de preferência um mais atualizado) e digite:

    - "localhost:3000/user" para ver a lista de usuários;

    - "localhost:3000/user/*{Algum Usuário}*" para selecionar este usuário específico do banco de dados;