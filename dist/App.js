"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const index_1 = require("./routes/index");
class App {
    constructor() {
        this.app = express();
        this.middlewares();
        this.routes();
    }
    middlewares() {
        this.app.use(morgan("dev"));
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }
    routes() {
        this.app.use("/", index_1.default);
        //this.app.use('/livros',LivroRouter);
    }
}
exports.default = new App();
