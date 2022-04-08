import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModificaComponent } from './modifica.component';

const routes: Routes = [{ path: '', component: ModificaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModificaRoutingModule { }
