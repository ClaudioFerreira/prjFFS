import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { ToastrService } from 'ngx-toastr';

import { ServiceService } from '../../services/service.service';
import { Service } from 'src/app/models/service';
import { splitAtColon } from '@angular/compiler/src/util';

import { CarouselService } from 'src/app/services/carousel.service';
import { Carousel } from 'src/app/models/carousel';
import { from } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ServiceService, CarouselService]
})
export class AdminComponent implements OnInit {

  constructor(
    private serviceService: ServiceService,
    private carouselService: CarouselService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.getServices();
    this.getCarousels();
  }

  getServices() {
    this.serviceService.getServices()
      .subscribe(res => {
        this.serviceService.services = res as Service[];
      })
  }

  addService(form: NgForm) {
    if (form.value._id) {      
      this.serviceService.putService(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getServices();
          this.toastr.success('Serviço atualizado com sucesso', 'Atualizado!');
          console.log(res);
        });
    } else {
      this.serviceService.postService(form.value)
        .subscribe(res => {
          this.resetForm(form);
          this.getServices();
          this.toastr.success('Serviço adicionado', 'Salvo!');
        });
    }
  }

  editService(service: Service) {
    this.serviceService.selectedService = service;
  }

  deleteServices(_id: string) {
    if (confirm('Você realmente quer deletar?')) {
      this.serviceService.deleteService(_id)
        .subscribe(res => {
          this.getServices();
          this.toastr.warning('Serviço removido', 'Deletado!')
        });
    }
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.serviceService.selectedService = new Service();
      this.getServices();
    }
  }


  // CAROUSEL

  getCarousels(){
    this.carouselService.getCarousels()
    .subscribe(res => {
      this.carouselService.carousel = res as Carousel[];
    })
  }

  addCarousel(form: NgForm){
    console.log(form.value)
    if (form.value._id) {
      this.carouselService.putCarousel(form.value)
      .subscribe(res => {
        this.resetForm(form);
        this.getCarousels();
        this.toastr.success('Carousel atualizado com sucesso', 'Sucesso');
        console.log(res);
      });
    } else {
      this.carouselService.postCarousel(form.value)
      .subscribe(res => {
        this.resetForm(form)
        this.getCarousels();
        this.toastr.success('Caousel adicionado', 'Salvo!');
      });
    }
  }

  editCarousel(carousel: Carousel){
    this.carouselService.carouselSelecionado = carousel;
  }

  deleteCarousel(_id: string) {
    if (confirm('Você realmente quer deletar?')) {
      this.carouselService.deleteCarousel(_id)
        .subscribe(res => {
          this.getServices();
          this.toastr.warning('Carousel removido', 'Deletado!')
        });
    }
  }

}
