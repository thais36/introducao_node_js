const Sequelize = require('sequelize');
const sequelize = new Sequelize('introducao', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});

sequelize.authenticate().then(function() {
    console.log('Conectado com sucesso!');
}).catch(function(erro) {
    console.log('Falha ao se conectar: ' + erro);
});

// Entidade cliente
const Cliente = sequelize.define('cliente', {
    nome: {
        type: Sequelize.STRING
    },
    endereco: {
        type: Sequelize.STRING
    },
    bairro: {
        type: Sequelize.STRING
    },
    cep: {
        type: Sequelize.STRING
    },
    cidade: {
        type: Sequelize.STRING
    },
    telefone: {
        type: Sequelize.STRING
    },
    celular: {
        type: Sequelize.STRING
    }
});

// Sincroniza o modelo com o banco de dados e cria a tabela se não existir
sequelize.sync().then(() => {
    
    // Criando três registros na tabela cliente
    Cliente.create({
        nome: 'João',
        endereco: 'Rua 1',
        bairro: 'Centro',
        cep: '12345-678',
        cidade: 'São Paulo',
        telefone: '11 1234-5678',
        celular: '11 98765-4321'
    });

    Cliente.create({
        nome: 'Maria',
        endereco: 'Rua 2',
        bairro: 'Centro',
        cep: '12345-678',
        cidade: 'São Paulo',
        telefone: '11 1234-5678',
        celular: '11 98765-4321'
    });

    Cliente.create({
        nome: 'Thais',
        endereco: 'Rua 3',
        bairro: 'Centro',
        cep: '12345-678',
        cidade: 'São Paulo',
        telefone: '11 1234-5678',
        celular: '11 98765-4321'
    });

}).catch((erro) => {
    console.log('Erro ao sincronizar com o banco de dados: ' + erro);
});

//ao rodar o node banco.js criou-se a tabela clientes no banco de dados introducao, onde foi inserido 3 registros