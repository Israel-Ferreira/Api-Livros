"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const LivroRouter_1 = require("./routes/LivroRouter");
const index_1 = require("./routes/index");
const DbConnection_1 = require("./config/DbConnection");
class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.connectDb();
        this.routes();
    }
    middlewares() {
        this.app.use(morgan("dev"));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }
    connectDb() {
        DbConnection_1.default.createConnection();
    }
    stopConnection(message, callback) {
        DbConnection_1.default.closeConnection(message, callback);
    }
    routes() {
        this.app.use("/", index_1.default);
        this.app.use('/livros', LivroRouter_1.default);
    }
}
exports.default = new App();
