import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { ToastrService } from 'ngx-toastr';

import { ServiceService } from '../../services/service.service';
import { Service } from 'src/app/models/service';
import { splitAtColon } from '@angular/compiler/src/util';
import { from } from 'rxjs';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ServiceService]
})
export class AdminComponent implements OnInit {

  constructor(
    private serviceService: ServiceService,
    private toastr: ToastrService
  ) { }

  ngOnInit() {
    this.getServices();
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

}
