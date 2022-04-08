import { Component, OnInit, Inject } from '@angular/core';
import { ReservaService } from 'src/app/services/reserva.service';
import { CanchaService } from 'src/app/services/cancha.service';
import { Router } from "@angular/router"
import { AuthService } from '@auth0/auth0-angular';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-reservar',
  templateUrl: './reservar.component.html',
  styleUrls: ['./reservar.component.css']
})
export class ReservarComponent implements OnInit {

  data:any = [];
  canchas:any = [];
  fecha:any;
  cancha:any;

  canchaid:any;
  estadoid:any;
  horarioid:any;
  userid:any;
 
  mindate:any;

  username:any;

  constructor(private router:Router, private rs:ReservaService, private cs:CanchaService,@Inject(DOCUMENT) private document: Document, private auth: AuthService) { 
    
  }

  ngOnInit(): void {

    this.auth.getUser().subscribe(c => {
        this.username = c?.name;
    })

    this.mindate = new Date().toISOString().slice(0, 10);
    this.getCanchas()
  }

  getHorarios(fecha:Date,cancha:number){        
    // console.log(fecha);       
    // console.log(cancha);           
    this.rs.getHorarios(fecha).subscribe(result =>{    
      // console.log(result)    
      let list:any[] = result;
      this.data = list.filter(p=>p.CanchaId==cancha)   
    
    // console.log(this.data);       
    })
 }


 getCanchas(){
  this.cs.getCanchas().subscribe(result =>{      
   this.canchas = result;
  //  console.log(this.data);       
  })
}

reservar(canchahorarioid:number,fecha:Date, cancha:number){    
    
      let datareserva = {
      canchahorarioid:canchahorarioid,   
      username:this.username
    }     
      console.log(datareserva);
     this.rs.createReserva(datareserva).subscribe(r =>{
      console.log ("Reservada correctamente")
      this.getHorarios(fecha,cancha)
    })
    
 

  

  
}

}
