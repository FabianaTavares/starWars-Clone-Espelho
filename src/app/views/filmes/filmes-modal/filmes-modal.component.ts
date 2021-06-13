
import { Component, Inject, OnInit } from '@angular/core';
/* import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; */
import { PersonagensModel } from 'src/app/shared/models/interface/personagens.model';
import { PlanetasModel } from 'src/app/shared/models/interface/planetas.model';
import { PersonagensService } from 'src/app/shared/services/personagens.service';
import { PlanetasService } from 'src/app/shared/services/planetas.service';

import { FilmesComponent } from '../filmes.component';

@Component({
  selector: 'app-filmes-modal',
  templateUrl: './filmes-modal.component.html',
  styleUrls: ['./filmes-modal.component.css'],
})
export class FilmesModalComponent implements OnInit {
  personagemFilme: PersonagensModel[] = [];
  persons = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,]
  planetaFilme: PlanetasModel[] = []
  filmes: number = 1
  constructor(
   /*  @Inject(MAT_DIALOG_DATA) public data: any, */
  /*   private dialogRef: MatDialogRef<FilmesComponent>, */
    private personagemService: PersonagensService,
    private planetaService: PlanetasService
  ) { }

  ngOnInit(): void {
    this.personagensFilme()
    this.planetaFilms()
    console.log(this.filmes)
  }

  planetaFilms() {
    /* this.data.planets.forEach((url: string) => {
      console.log(url)
      this.planetaService.getPlanetaByUrl(url).subscribe(
        (planeta) => {
          this.planetaFilme.push(planeta)
        }
      )
    }) */
  }
  personagensFilme() {
    /* this.data.characters.forEach((url: string) => {
      this.personagemService.getPersonagemByUrl(url).subscribe(
        (personagem) => {
          this.personagemFilme.push(personagem)
        }
      )

    }); */
  }


  onNoClick() {
   /*  this.dialogRef.close(); */
  }
}
