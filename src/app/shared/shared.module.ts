import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavBarComponent } from './componentes/nav-bar/nav-bar.component';
import { DataPipe } from './pipes/data.pipe';
import { FilmesService } from './services/filmes.service';
import { ErroPageComponent } from './componentes/erro-page/erro-page.component';
import { LoginService } from './services/login.service';
import { NavesService } from './services/naves.service';
import { PersonagensService } from './services/personagens.service';
import { PlanetasService } from './services/planetas.service';
import { VeiculosService } from './services/veiculos.service';



@NgModule({
  imports: [
    CommonModule,
    RouterModule,

  ],
  declarations: [
    NavBarComponent,
    ErroPageComponent,
    DataPipe
  ],
  exports: [
    NavBarComponent,
    ErroPageComponent,
    DataPipe
  ],
  providers: [
    FilmesService,
    LoginService,
    NavesService,
    PersonagensService,
    PlanetasService,
    VeiculosService
  ]

})
export class SharedModule { }
