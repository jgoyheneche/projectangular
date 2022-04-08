import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreaRoutingModule } from './crea-routing.module';
import { CreaComponent } from './crea.component';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    CreaComponent
  ],
  imports: [
    CommonModule,
    CreaRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class CreaModule { }
