import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PerfilComponent } from './views/perfil/perfil.component';
import { CalendarioComponent } from './views/calendario/calendario.component';
import { AgendamentosComponent } from './views/agendamentos/agendamentos.component';
import { RegistrosComponent } from './views/registros/registros.component';
import { HomeComponent } from'./views/home/home.component';

const routes: Routes = [{
  path: 'perfil',
  component: PerfilComponent
},{
  path: 'calendario',
  component: CalendarioComponent
},{
  path: 'agendamentos',
  component: AgendamentosComponent
},{
  path: 'registros',
  component: RegistrosComponent
},{
  path: 'home',
  component: HomeComponent
}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
