import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from "@angular/router"
import { CanchaService } from 'src/app/services/cancha.service';

@Component({
  selector: 'app-crea',
  templateUrl: './crea.component.html',
  styleUrls: ['./crea.component.css']
})
export class CreaComponent implements OnInit {

  fg:FormGroup;

  constructor(private fb:FormBuilder,private cs:CanchaService,private router:Router) { 
    this.fg = this.fb.group({
      cancha: ['', [Validators.required]],  
      precio: ['', [Validators.required]]     
    })
  }

    ngOnInit(): void {
    }

  crear(){    
    let data = {
        cancha:this.fg.get('cancha')?.value,
        precio:this.fg.get('precio')?.value
    }      
    this.cs.createCancha(data).subscribe(r =>{
      // console.log(r)
      console.log ("Creado correctamente")
    })
     
    this.router.navigate(['/canchas'])
  }

}
