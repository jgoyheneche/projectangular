import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModificaRoutingModule } from './modifica-routing.module';
import { ModificaComponent } from './modifica.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ModificaComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    ModificaRoutingModule
  ]
})
export class ModificaModule { }
