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
    async getBySlug(req, res, next) {
        try {
            const { slug } = req.params;
            const resp = await LivroService_1.default.getBySlug(slug);
            res.status(200).send(resp);
        }
        catch (err) {
            res.status(400).send(err);
        }
    }
    async create(req, res, next) {
        const livro = req.body;
        try {
            await LivroService_1.default.create(livro);
            res.status(201).send({ message: 'Livro Cadastrado com sucesso' });
        }
        catch (err) {
            res.status(400).send({ message: err });
        }
    }
    async update(req, res, next) {
        const { id } = req.params;
        const livro = req.body;
        try {
            const resp = await LivroService_1.default.update(id, livro);
            res.status(200).send(resp);
        }
        catch (err) {
            res.status(400).send(err);
        }
    }
    async delete(req, res, next) {
        const { id } = req.params;
        try {
            const resp = await LivroService_1.default.remove(id);
            res.status(200).send({ message: "Livro Retirado com sucesso" });
        }
        catch (err) {
            res.status(400).send({ message: "Falha ao remover o livro" });
        }
    }
}
exports.default = new LivroController();
