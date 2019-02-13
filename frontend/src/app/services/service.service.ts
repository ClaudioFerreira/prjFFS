import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';
import { Service } from '../models/service';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  selectedService: Service;
  services: Service[];
  readonly URL_API = 'http://localhost:3000/api/services';

  constructor(private http: HttpClient) { 
    this.selectedService = new Service();
   }

  getServices(){
    return this.http.get(this.URL_API);
  }

  postService(Service: Service){
    return this.http.post(this.URL_API, Service);
  }

  putService(Service: Service){
    return this.http.put(this.URL_API + `/${Service._id}`, Service);
  }

  deleteService(Service: Service){
    return this.http.delete(this.URL_API + `/${Service._id}`);
  }

}
