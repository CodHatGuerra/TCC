import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/template/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule} from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';


import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { PerfilComponent } from './views/perfil/perfil.component';
import { CalendarioComponent } from './views/calendario/calendario.component';
import { AgendamentosComponent } from './views/agendamentos/agendamentos.component';
import { RegistrosComponent } from './views/registros/registros.component';
import { HomeComponent } from './views/home/home.component';
import { WhiteDirective } from './components/template/White.directive'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    PerfilComponent,
    CalendarioComponent,
    AgendamentosComponent,
    RegistrosComponent,
    HomeComponent,
    WhiteDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
