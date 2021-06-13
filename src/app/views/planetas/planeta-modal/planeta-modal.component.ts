import { Component, Inject, OnInit } from '@angular/core';

/* import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog'; */
import { FilmeModel } from 'src/app/shared/models/interface/filmes.model';
import { FilmesService } from 'src/app/shared/services/filmes.service';

import { PlanetasComponent } from '../planetas.component';

@Component({
  selector: 'app-planeta-modal',
  templateUrl: './planeta-modal.component.html',
  styleUrls: ['./planeta-modal.component.css'],
})
export class PlanetaModalComponent implements OnInit {
  filmeArray: FilmeModel[] = []
  constructor(
   /*  @Inject(MAT_DIALOG_DATA) public data: any,
    private dialogRef: MatDialogRef<PlanetasComponent>, */
    private filmeService: FilmesService
  ) { }

  ngOnInit(): void {
    this.planetasFilmes()
  }

  onNoClick() {
    /* this.dialogRef.close(); */
  }

  planetasFilmes() {
   /*  this.data.films.forEach((url: any) => {
      this.filmeService.getFilmeByUrl(url).subscribe((filmes) => {
        this.filmeArray.push(filmes)
      })
    }) */
  }
}
