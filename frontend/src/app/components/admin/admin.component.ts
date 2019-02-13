import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { ToastrService } from 'ngx-toastr';

import { ServiceService } from '../../services/service.service';
import { Service } from 'src/app/models/service';

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

  addService(form: NgForm) {
    this.serviceService.postService(form.value)
      .subscribe(res => {
        this.resetForm(form);
        this.getServices();
        this.toastr.success('Serviço adicionado', 'Salvo!');
      })
  }
  
  resetForm(form?: NgForm) {
    if (form) {
      form.reset();
      this.serviceService.selectedService = new Service();
      this.getServices();
    }
  }
  
  getServices(){
    this.serviceService.getServices()
    .subscribe( res => {
      this.serviceService.services = res as Service[];
    })
  }
}
