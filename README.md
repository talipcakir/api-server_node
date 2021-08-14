# api-server_node
Node.js, Express + Express.router, sequelize and mysql2

Api link:
>http://localhost:8080/api/users/

Server start:
>node server

Database setting:
>app/config/db.config.js
>
>module.exports = {
    HOST: "localhost",
    USER: "root",
    PASSWORD: "",
    DB: "mydata",
    dialect: "mysql",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
};
