import LivroService from '../services/LivroService';

class LivroController {
    async getAll(req,res,next){
        try{
            const resp = await LivroService.getAll();
            res.status(200).send(resp);
        }catch(err){
            res.status(400).send(err)
        }
    }

    async getBySlug(req,res,next){
        try{
            const {slug} = req.params;
            const resp = await LivroService.getBySlug(slug);
            res.status(200).send(resp);
        }catch(err){
            res.status(400).send(err)
        }
    }


    async create(req,res,next){
        const livro = req.body;

        try{
            await LivroService.create(livro);
            res.status(201).send({message: 'Livro Cadastrado com sucesso'})
        }catch(err){
            res.status(400).send({message: err});
        }
    }

    async update(req,res,next){
        const {id} = req.params;
        const livro = req.body;

        try{
            const resp = await LivroService.update(id,livro);
            res.status(200).send(resp)
        }catch(err){
            res.status(400).send(err);
        }
    }

    async delete(req,res,next){
        const {id} = req.params;
        
        try{
            const resp = await LivroService.remove(id);
            res.status(200).send({message: "Livro Retirado com sucesso"})
        }catch(err){
            res.status(400).send({message: "Falha ao remover o livro"})
        }
    }


}


export default new LivroController();