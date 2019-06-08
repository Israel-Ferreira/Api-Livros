"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const LivroRepository_1 = require("../repositories/LivroRepository");
class LivroService {
    constructor() { }
    async getAll() {
        const resp = await LivroRepository_1.default.find({}, 'title autor coverImage slug');
        return resp;
    }
    async getBySlug(slug) {
        const resp = await LivroRepository_1.default.find({ slug });
        return resp;
    }
    async getById(id) {
        const resp = await LivroRepository_1.default.findById(id);
        return resp;
    }
    async create(livro) {
        await LivroRepository_1.default.create(livro);
    }
    async update(id, livro) {
        const resp = await LivroRepository_1.default.findByIdAndUpdate(id, livro);
        return resp;
    }
    async remove(id) {
        return LivroRepository_1.default.remove(id);
    }
}
exports.default = new LivroService();
