import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanchaService {

    urlApi = "https://hallergen.herokuapp.com/api/cancha";  
    //urlApi = "http://localhost:8080/api/cancha";  

    constructor(private http:HttpClient) { }
  
    getCanchas():Observable<any>{
      return this.http.get(this.urlApi);
    }
  
    getCancha(id:number):Observable<any>{
      return this.http.get(this.urlApi + "/" + id);
    }
  
    createCancha(data:any){
     return this.http.post(this.urlApi,data)
    }
  
    modificaCancha(id:number,data:any)
    {
      return this.http.put(this.urlApi + "/" + id,data)
    }
  
}
