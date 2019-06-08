"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LivroService_1 = require("../services/LivroService");
class LivroController {
    async getAll(req, res, next) {
        try {
            const resp = await LivroService_1.default.getAll();
            res.status(200).send(resp);
        }
        catch (err) {
            res.status(400).send(err);
        }
    }
}
exports.default = new LivroController();
