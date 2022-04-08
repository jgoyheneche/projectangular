import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstadoService {


  urlApi = "https://hallergen.herokuapp.com/api/estado";  
  //urlApi = "http://localhost:8080/api/estado";  

  constructor(private http:HttpClient) { }

  getEstados():Observable<any>{
    return this.http.get(this.urlApi);
  }

  getEstado(id:number):Observable<any>{
    return this.http.get(this.urlApi + "/" + id);
  }

  createEstado(data:any){
   return this.http.post(this.urlApi,data)
  }

  modificaEstado(id:number,data:any)
  {
    return this.http.put(this.urlApi + "/" + id,data)
  }

}
