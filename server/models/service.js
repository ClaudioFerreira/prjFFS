const mongoose = require('mongoose');
const { Schema } = mongoose;

const ServiceSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String, required: true }
    // image: { type: } AINDA TENHO QUE DESCOBRIR COMO SUBIR UMA ARQUIVO DE IMAGEM
});

module.exports = mongoose.model('Service', ServiceSchema);