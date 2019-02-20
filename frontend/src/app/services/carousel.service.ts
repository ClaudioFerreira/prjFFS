import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carousel } from '../models/carousel'
import { from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CarouselService {

  carouselSelecionado: Carousel;
  carousel: Carousel[];
  readonly URL_API = 'http://localhost:3000/api/carousel';

  constructor(private http: HttpClient) {
    this.carouselSelecionado = new Carousel();
  }

  getCarousels(){
    return this.http.get(this.URL_API);
  }

  postCarousel(Carousel: Carousel){
    return this.http.post(this.URL_API, Carousel);
  }

  putCarousel(form: Carousel){
    return this.http.put(this.URL_API + `/${form._id}`, form);
  }

  deleteCarousel(_id: string){
    return this.http.delete(this.URL_API + `/${_id}`);
  }

}