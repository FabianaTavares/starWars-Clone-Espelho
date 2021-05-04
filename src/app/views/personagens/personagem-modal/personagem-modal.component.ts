import { PlanetasService } from './../../../services/planetas.service';
import { Veiculos } from './../../veiculos/interface/veiculos';
import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FilmesService } from 'src/app/services/filmes.service';
import { Filme } from '../../filmes/interface/filmes';
import { Planetas } from '../../planetas/interface/planetas';

@Component({
  selector: 'app-personagem-modal',
  templateUrl: './personagem-modal.component.html',
  styleUrls: ['./personagem-modal.component.css'],
})
export class PersonagemModalComponent {
  filmesPersonagemArray: Filme[] = []


  showOrNot = true
  constructor(
    public dialogRef: MatDialogRef<PersonagemModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private filmesService: FilmesService,
  ) { }

  ngOnInit(): void {
    this.filmePersonagem()



  }


  filmePersonagem() {
    this.data.films.forEach((url: string) => {
      this.filmesService.getFilmeByUrl(url).subscribe((filme) => {
        this.filmesPersonagemArray.push(filme)
      })
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}