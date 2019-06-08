"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const Livro_1 = require("../models/Livro");
exports.default = mongoose.model('Livro', Livro_1.default, 'livros');
