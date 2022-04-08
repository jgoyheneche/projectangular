import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"
import { CanchaService } from 'src/app/services/cancha.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  data:any = [];
 
  constructor(private router:Router, private cs:CanchaService) { 
    this.getEstados();
  }

  ngOnInit(): void {
    this.getEstados();
  }

  getEstados(){
    this.cs.getCanchas().subscribe(result =>{      
     this.data = result;
    //  console.log(this.data);       
    })
 }

 crear(){    
  //console.log(this.data[index])   
  this.router.navigate(['/cancha-crea'])
 
}

 editar(id:number){    
    console.log(id)   
    this.router.navigate(['/cancha-modifica', id])   
  }

}
