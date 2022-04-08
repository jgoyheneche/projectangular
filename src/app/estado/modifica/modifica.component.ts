import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EstadoService } from 'src/app/services/estado.service';

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrls: ['./modifica.component.css']
})
export class ModificaComponent implements OnInit {

 
  id: any;
  fg: FormGroup;

  // @Input() estadoData: any = { Estado: ''};

  constructor(private ar:ActivatedRoute, private es:EstadoService, private fb:FormBuilder,private router:Router) { 
    this.fg = this.fb.group({
      estado: ['', [Validators.required]],
      activo: ['', [Validators.required]]
    })
  }

  ngOnInit(): void { 
    this.ar.params.subscribe(paramsId =>{
      this.id = paramsId['id']    
    })    

    this.es.getEstado(this.id).subscribe(resp =>{
      console.log(resp)
      this.chargeForm(resp)
    })
   } 

   chargeForm(data:any){
    let mydata = data[0]
    // console.log(data[0])
    this.fg = this.fb.group({
      estado: [mydata.Estado],
      activo: [mydata.Activo]
    })

  }  

  modificar(){
    let data = {
      estado:this.fg.get('estado')?.value,
      activo:this.fg.get('activo')?.value
   }      
    this.es.modificaEstado(this.id,data).subscribe(r =>{
        console.log ("Modificado correctamente")
    })
       
   this.router.navigate(['/estados'])

  }

}
