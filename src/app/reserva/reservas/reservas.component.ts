import { Component, OnInit , Inject } from '@angular/core';
import { Router } from "@angular/router"
import { ReservaService } from 'src/app/services/reserva.service';
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-reservas',
  templateUrl: './reservas.component.html',
  styleUrls: ['./reservas.component.css']
})
export class ReservasComponent implements OnInit {

  data:any = [];
  usuario:any;
  usuadmin = '';


  constructor(private router:Router, private rs:ReservaService,@Inject(DOCUMENT) private document: Document, private auth: AuthService) {
    this.getuser()
   }

  ngOnInit(): void {
    this.getuser()
  }

  getuser(){
    this.auth.getUser().subscribe(c => {
      this.usuario = c?.name;
      console.log(this.usuario)
    })

    if (this.usuario=="admin@admin.cl"){
      this.getReservas();      
      this.usuadmin=this.usuario;
      console.log('admin')  
    }else{ 
      this.getReservasUsuario(this.usuario);
      console.log('user')
    }
  }

  getReservas(){
    this.rs.getReservas().subscribe(result =>{      
    this.data = result;
    
    })

 }

 getReservasUsuario(usuario:any){
   console.log(usuario)
  this.rs.getReservasUsuario(usuario).subscribe(result =>{      
  this.data = result;  
  })
}

 confirmar(id:any){
  let setdata = {
    estado:2    
 }      
 
  this.rs.updateReserva(id,setdata).subscribe(r =>{    
    console.log ("Confirmado correctamente")
    this.getuser()
  })

 }

 eliminar(id:any){
  this.rs.deleteReserva(id).subscribe(r =>{
    console.log ("Eliminado correctamente")
    this.getuser()
  })

}

}
