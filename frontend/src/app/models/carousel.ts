export class Carousel {

    constructor(_id = '', tituloCarousel = ''){
        this._id = _id;
        this.tituloCarousel = tituloCarousel;
    }

    _id: string;
    tituloCarousel: string;
    // imagemCarousel: Buffer;
}
