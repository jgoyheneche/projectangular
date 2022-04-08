import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReservarRoutingModule } from './reservar-routing.module';
import { ReservarComponent } from './reservar.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ReservarComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    ReservarRoutingModule
  ]
})
export class ReservarModule { }
