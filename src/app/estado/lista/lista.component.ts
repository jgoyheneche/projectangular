import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Router } from "@angular/router"
import { EstadoService } from '../../services/estado.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent implements OnInit {

  data:any = [];
 
  constructor(private router:Router, private es:EstadoService) { 
    this.getEstados();
  }

  ngOnInit(): void {
    this.getEstados();
  }

  getEstados(){
    this.es.getEstados().subscribe(result =>{      
     this.data = result;
     console.log(this.data);       
    })
 }

 crear(){    
  //console.log(this.data[index])   
  this.router.navigate(['/estado-crea'])
 
}

 editar(id:number){    
    console.log(id)   
    this.router.navigate(['/estado-modifica', id])   
  }

}
