"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const LivroSchema = new mongoose_1.Schema({
    title: { type: String, unique: true, required: true },
    autor: { type: mongoose_1.Schema.Types.ObjectId, required: true },
    slug: { type: String, required: true },
    year: { type: Number, required: true },
    coverImage: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});
exports.default = LivroSchema;
