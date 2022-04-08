import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreaComponent } from './crea.component';

const routes: Routes = [{ path: '', component: CreaComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreaRoutingModule { }
