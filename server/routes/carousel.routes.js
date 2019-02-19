const express = require('express');
const router = express.Router();

const carousel = require('../controllers/carousel.controller');

router.get('/', carousel.getCarousels);
router.post('/', carousel.createCarousel);
router.get('/:id', carousel.getCarousel);
router.put('/:id', carousel.editCarousel);
router.delete('/:id', carousel.deleteCarousel);

module.exports = router;