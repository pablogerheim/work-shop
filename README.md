# Work Shop

Função:
- Apresentar produtos comercias
- Apresentar texto sobre a empresa
- Pagina para informar meios de contato
- Capitar e-mail de clientes interessados 

Area ADM:
- Controle de todas as informações apresentadas na área de cliente
- Oferece uma forma fácil para atualizar texto sobre a empresa assim como os dados para contato
- CRUD completo para interagir com os produtos oferecidos, podendo deixá-los inativos ou sinalizar que a imagem contém um texto auto explicativo 
- Controle da evolução da captação de e-mails podendo excluir ou inativar os emails cadastrados, também oferece paginação e campo de busca para encontrar emails de uma forma mais fácil e pratica

## 🚧 Em Desenvolvimento

Criação automática do banco de dados

Testes

## 🚀 Começando

Com Docker - 

- `docker-compose build `
- `docker-compose up `

Sem Docker -

Ao abrir o projeto deve-se abrir 2 terminais:

Terminal 1:

- `Cd back`
- `Npm i`
- `Npm start`

Terminal 2:

- `Cd front`
- `Npm i`
- `Npm start`

### 📋 Pré-requisitos

Alem das variável de ambiente em .env 

No caso do Docker - https://www.docker.com/

No caso de clonar do Github - Node.js - https://nodejs.org/en/

Criar uma conta no ElephantSQL - https://customer.elephantsql.com/

Criar uma conta no MongoDB Atlas - https://www.mongodb.com/

## Banco de Dados 

PostgresSQL 

Criar uma instancia chamada market, copiar o URL na aba Details e colar em: back -> repository -> postgreconnect.js

Rodar os comandos para criar as tabelas na aba Browser

CREATE TABLE emails (  
    email_id SERIAL PRIMARY KEY,
    email VARCHAR NOT NULL,
    name VARCHAR NOT NULL,
active BOOLEAN NOT NULL
)

CREATE TABLE abouts (  
    about_id SERIAL PRIMARY KEY,
    about VARCHAR NOT NULL
)

CREATE TABLE contacts (  
    contact_id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
    telephone VARCHAR NOT NULL
)

CREATE TABLE products (  
    product_id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    image VARCHAR NOT NULL,
    description VARCHAR NOT NULL,
    url VARCHAR NOT NULL,
    active BOOLEAN NOT NULL,
    autoexplan BOOLEAN NOT NULL
)

CREATE TABLE users (
    user_id SERIAL PRIMARY KEY,
    name VARCHAR NOT NULL,
    password VARCHAR NOT NULL,
    access VARCHAR NOT NULL,
    timestamp DATE NOT NULL
)

MongoDB

Criar uma cluster chamada market e 2 collections blacklist e lastId com o seguinte formato 

    blacklist
        {
            blacktokens : Array [] 
            blackList : "BlackList"
        }

    lastId
        {
            title : "LastId"
            lastId : 0
        }

## Rotas 

Após o subir o projeto acessar http://localhost:3001/doc/ 

## 🛠️ Construído com

Front
* [React](https://pt-br.reactjs.org/) - Framework 
* [Tailwind](https://tailwindcss.com/) - Estilização
* [Chakra UI](https://chakra-ui.com/) - Estilização
* [Axios](https://axios-http.com/ptbr/docs/intro) - API

Back
* [Node](https://nodejs.org/en/) - Framework 
* [Express](http://expressjs.com/pt-br/) - Framework 
* [Sequelize](https://sequelize.org/) - ORM 
* [ElephantSQL](https://www.elephantsql.com/) - Data Base 
* [MongoDB](https://www.mongodb.com/) - Data Base 
* [Swagger](https://swagger.io/) - Documentação

Geral
* [Docker](https://www.docker.com/) - Software 
* [GitHub](https://github.com/) - Software
* [Prettier](https://prettier.io/) - Formatador
* [ESLint](https://eslint.org/) - Formatador

