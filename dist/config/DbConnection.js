"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
class DbConnection {
    constructor() {
        this.DB_URI = "mongodb://israel:starwars17@ds042128.mlab.com:42128/livros-db";
    }
    createConnection() {
        mongoose.connect(this.DB_URI, { useNewUrlParser: true });
        this.logger();
    }
    logger() {
        this.DB_CONNECTION = mongoose.connection;
        this.DB_CONNECTION.on("connected", () => console.log(`O mongoose foi iniciado`));
        this.DB_CONNECTION.on("error", err => console.log(`Erro na conexão: ${err}`));
        this.DB_CONNECTION.on("disconnected", () => console.log(`O mongoose foi desconectado`));
    }
    closeConnection(message, callback) {
        this.DB_CONNECTION.close(() => {
            console.log(`O mongoose foi desconectado por: ${message}`);
            callback();
        });
    }
}
exports.default = new DbConnection();
