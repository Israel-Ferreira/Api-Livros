import * as mongoose from 'mongoose';
import LivroSchema from '../models/Livro';

export default mongoose.model('Livro',LivroSchema,'livros')