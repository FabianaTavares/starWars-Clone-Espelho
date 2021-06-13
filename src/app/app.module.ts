import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './views/login/auth.service';
import { LoginComponent } from './views/login/login.component';
import { PersonagensComponent } from './views/personagens/personagens.component';
import { FilmesComponent } from './views/filmes/filmes.component';
import { NavesComponent } from './views/naves/naves.component';
import { VeiculosComponent } from './views/veiculos/veiculos.component';
import { PlanetasComponent } from './views/planetas/planetas.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
/* import { getPaginatorIntl } from 'src/assets/config/pagination'; */
import { PersonagemModalComponent } from './views/personagens/personagem-modal/personagem-modal.component';
import { NavesModalComponent } from './views/naves/naves-modal/naves-modal.component';
import { FilmesModalComponent } from './views/filmes/filmes-modal/filmes-modal.component';
import { VeiculosModalComponent } from './views/veiculos/veiculos-modal/veiculos-modal.component';
import { PlanetaModalComponent } from './views/planetas/planeta-modal/planeta-modal.component';

import { LoginModalComponent } from './views/login/modals/login-modal/login-modal.component';
import { LoginErroComponent } from './views/login/modals/login-erro/login-erro.component';
import { HomeComponent } from './views/home/home.component';
import { PersonagensHeroisComponent } from './views/personagens-herois/personagens-herois.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PersonagensComponent,
    FilmesComponent,
    NavesComponent,
    VeiculosComponent,
    PlanetasComponent,
    PersonagemModalComponent,
    NavesModalComponent,
    FilmesModalComponent,
    VeiculosModalComponent,
    PlanetaModalComponent,
    LoginModalComponent,
    LoginErroComponent,
    HomeComponent,
    PersonagensHeroisComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    PaginationModule.forRoot(),
    SharedModule,
  ],
  providers: [
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
