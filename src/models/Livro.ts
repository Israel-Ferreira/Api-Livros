import {Schema} from 'mongoose';

const LivroSchema = new Schema({
    title: {type: String, unique: true, required: true},
    autor: {type: String, required: true},
    slug: {type: String,required: true},
    publisher: {type: String, required: true},
    year: {type: Number, required: true},
    coverImage: {type: String,required: true },
    createdAt: {type: Date, default: Date.now}
});

export default LivroSchema;