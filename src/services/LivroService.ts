import Livro from '../repositories/LivroRepository';

class LivroService {
    constructor(){}

    async getAll(){
        const resp = await Livro.find({},'title autor coverImage slug')
        return resp;
    }

    async getBySlug(slug){
        const resp = await Livro.find({slug});
        return resp;
    }

    async getById(id){
        const resp = await Livro.findById(id);
        return resp;
    }

    async create(livro){
        await Livro.create(livro);
    }

    async update(id,livro){
        const resp = await Livro.findByIdAndUpdate(id,livro);
        return resp;
    }

    async remove(id){
        return Livro.remove(id);
    }

}

export default new LivroService();