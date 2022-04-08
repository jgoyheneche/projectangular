import { Component, OnInit} from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router"
import { EstadoService } from '../../services/estado.service';

@Component({
  selector: 'app-crea',
  templateUrl: './crea.component.html',
  styleUrls: ['./crea.component.css']
})
export class CreaComponent implements OnInit {

  
  fg:FormGroup;

  constructor(private fb:FormBuilder,private es:EstadoService,private router:Router) { 
    this.fg = this.fb.group({
      estado: ['', [Validators.required]]     
    })
  }

  ngOnInit(): void {
  }

  crear(){    
    let data = {
        estado:this.fg.get('estado')?.value
    }      
    this.es.createEstado(data).subscribe(r =>{
      // console.log(r)
      console.log ("Creado correctamente")
    })
     
    this.router.navigate(['/estados'])
  }

}
