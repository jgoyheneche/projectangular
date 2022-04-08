import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CanchaService } from 'src/app/services/cancha.service';

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.css']
})
export class ModificaComponent implements OnInit {

  id: any;
  fg: FormGroup;

  constructor(private ar:ActivatedRoute, private cs:CanchaService, private fb:FormBuilder,private router:Router) { 
    this.fg = this.fb.group({
      cancha: ['', [Validators.required]],
      precio: ['', [Validators.required]],
      activo: ['']
    })
  }

  ngOnInit(): void { 
    this.ar.params.subscribe(paramsId =>{
      this.id = paramsId['id']    
    })    

    this.cs.getCancha(this.id).subscribe(resp =>{
      console.log(resp)
      this.chargeForm(resp)
    })
   } 

   chargeForm(data:any){
    let mydata = data[0]
    // console.log(data[0])
    this.fg = this.fb.group({
      cancha: [mydata.Cancha],
      precio: [mydata.Precio],
      activo: [mydata.Activo]
    })

  }  

  modificar(){
    let data = {
      cancha:this.fg.get('cancha')?.value,
      precio:this.fg.get('precio')?.value,
      activo:this.fg.get('activo')?.value
   }      
    this.cs.modificaCancha(this.id,data).subscribe(r =>{
        console.log ("Modificado correctamente")
    })
       
   this.router.navigate(['/canchas'])

  }

}
