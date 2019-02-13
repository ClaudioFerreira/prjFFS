import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms'

import { ServiceService } from '../../services/service.service';
import { Service } from 'src/app/models/service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [ServiceService]
})
export class AdminComponent implements OnInit {

  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
  }

  addService(form: NgForm){
    this.serviceService.postService(form.value)
    .subscribe(res => {
      this.resetForm(form);
      console.log('Service Saved');
    })
  }

  resetForm(form?: NgForm){
    if (form) {
      form.reset();
      this.serviceService.selectedService = new Service();
    }
  }

}
