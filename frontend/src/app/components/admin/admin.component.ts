import { Component, OnInit } from '@angular/core';

import { ServiceService } from '../../services/service.service';

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

}
