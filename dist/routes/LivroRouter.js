"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const LivroController_1 = require("../controllers/LivroController");
class LivroRouter {
    constructor() {
        this.router = express_1.Router();
        this.routes();
    }
    routes() {
        this.router.get('/', LivroController_1.default.getAll);
        this.router.get('/:slug', LivroController_1.default.getBySlug);
        this.router.put('/:id', LivroController_1.default.update);
        this.router.post('/', LivroController_1.default.create);
        this.router.delete('/:id', LivroController_1.default.delete);
    }
}
exports.default = new LivroRouter().router;
