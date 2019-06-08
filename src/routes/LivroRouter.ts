import { Router } from 'express';
import LivroController from '../controllers/LivroController';

class LivroRouter {
    public router: Router;

    constructor(){
        this.router = Router();
        this.routes();
    }


    routes(){
        this.router.get('/',LivroController.getAll)
        this.router.get('/:slug',LivroController.getBySlug)
        this.router.put('/:id',LivroController.update)
        this.router.post('/',LivroController.create)
        this.router.delete('/:id',LivroController.delete)
    }
}

export default new LivroRouter().router;