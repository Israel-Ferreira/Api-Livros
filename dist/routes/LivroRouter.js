"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
class LivroRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get('/');
        this.router.get('/:slug');
        this.router.put('/:id');
        this.router.post('/');
        this.router.get('/tag/:tag');
    }
}
exports.default = new LivroRouter().router;
