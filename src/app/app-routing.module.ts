import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';

const routes: Routes = [

  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
  // Estado
  { path: 'estados', loadChildren: () => import('./estado/lista/lista.module').then(m => m.ListaModule), canActivate:[AuthGuard] },
  { path: 'estado-crea', loadChildren: () => import('./estado/crea/crea.module').then(m => m.CreaModule) },
  { path: 'estado-modifica/:id', loadChildren: () => import('./estado/modifica/modifica.module').then(m => m.ModificaModule) },
  // Cancha
  { path: 'canchas', loadChildren: () => import('./cancha/lista/lista.module').then(m => m.ListaModule) , canActivate:[AuthGuard]},
  { path: 'cancha-crea', loadChildren: () => import('./cancha/crea/crea.module').then(m => m.CreaModule) },
  { path: 'cancha-modifica/:id', loadChildren: () => import('./cancha/modifica/modifica.module').then(m => m.ModificaModule) },
  // RESERVA
  { path: 'agendar', loadChildren: () => import('./reserva/reservar/reservar.module').then(m => m.ReservarModule) },
  
  {path: '' , pathMatch:'full', redirectTo:'/home'},

  { path: 'agendadas', loadChildren: () => import('./reserva/reservas/reservas.module').then(m => m.ReservasModule), canActivate:[AuthGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
