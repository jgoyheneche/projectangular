import { Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ReservaService {

 
  urlApi = "https://hallergen.herokuapp.com/api/";  
  //urlApi = "http://localhost:8080/api/";  

  constructor(private http:HttpClient) { }

  getHorarios(fecha:Date):Observable<any>{
    return this.http.get(this.urlApi + "/horario/" + fecha);
  }

  createReserva(data:any){
    return this.http.post(this.urlApi + "/reserva",data)
   }

   getReservas():Observable<any>{
    return this.http.get(this.urlApi + "/reserva");
  }

  getReservasUsuario(usuario:any):Observable<any>{
    console.log('por usuario :' + usuario)
    return this.http.get(this.urlApi + "/reserva/" + usuario);
  }

  updateReserva(id:number,data:any):Observable<any>{
    return this.http.put(this.urlApi + "/reserva/" + id,data);
  }

  deleteReserva(id:number):Observable<any>{
    return this.http.delete(this.urlApi + "/reserva/" + id);
  }

}
