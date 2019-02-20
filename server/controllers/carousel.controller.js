const Carousel = require('../models/carousel');

const carouselCtrl = {};

carouselCtrl.getCarousels = async (req, res) => {
    const carousel = await Carousel.find();
    res.json(carousel);
}

carouselCtrl.createCarousel = async (req, res) => {
    const carousel = new Carousel({
        titulo: req.body.titulo,
        // imagem: req.body.imagem
    });
    await carousel.save();
    res.json({
        'status': 'Carousel Salvo'
    })
};

carouselCtrl.getCarousel = async (req, res) => {
    const carousel = await Carousel.findById(req.params.id);
    res.json(carousel);
};

carouselCtrl.editCarousel = async (req, res) => {
    const { id } = req.params;
    const carousel = {
        titulo: req.body.titulo,
        // imagem: req.body.imagem
    };
    await Carousel.findByIdAndUpdate(id, { $ser: carousel }, { new: true });
    res.json({ status: 'Carousel Atualizado' });
};

carouselCtrl.deleteCarousel = async (req, res) => {
    await Carousel.findByIdAndRemove(req.params.id);
    res.json({ status: 'Carousel Deletado' });
}

module.exports = carouselCtrl;