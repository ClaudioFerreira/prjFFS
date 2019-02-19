const mongoose = require('mongoose');
const { Schema } = mongoose;

const CarouselSchema = new Schema({
    titulo: { type: String, required: true },
    imagem: { type: Image, required: true }
});

module.exports = mongoose.model('Carousel', CarouselSchema);