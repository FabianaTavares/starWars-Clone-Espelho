import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

import { Personagens } from 'src/app/shared/interface/personagens';
import { PersonagensService } from 'src/app/shared/services/personagens.service';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-personagens-herois',
  templateUrl: './personagens-herois.component.html',
  styleUrls: ['./personagens-herois.component.css']
})
export class PersonagensHeroisComponent implements OnInit {
  public personagensArray: Personagens[] = [];
  pageIndex: number = 0;
  pageSize!: number;
  mostrarTodos!: boolean

  private subjectPesquisa: Subject<string> = new Subject<string>()
  public personSearchzin!: Observable<any>

  posPesquisa: boolean = true
  personSearch!: Observable<any>
  public pessoaPesquisada: Personagens[] = []
  name = new FormControl('')
  public paginator: boolean = true



  constructor(
    private personagemService: PersonagensService,
    public dialog: MatDialog,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.listarPersonagens(1);

  }


  listarPersonagens(numeroPagin: number) {
    this.personagemService.getPersonagem(numeroPagin).subscribe(
      (personagem) => {

        this.personagensArray = personagem.results;
        this.pageSize = personagem.count;


        this.pessoaPesquisada = this.personagensArray
        console.log(this.pessoaPesquisada)
      },
      (err) => {
        this.router.navigate(['/erro'])
        console.log(err)
      }
    );
  }

  proximaPagina(pe: number) {
    this.listarPersonagens(pe);
  }



  pesquisarPersonagemClick() {
    const pesquisa = this.name.value
    if (pesquisa < 10) {
      this.paginator = true
      this.listarPersonagens(1)
    } else {
      this.paginator = false
    }
    if (pesquisa === null || pesquisa === '') {

    } else {
      this.personagemService.pesquisaPersonagem(pesquisa).subscribe((result: any) => {
        this.pessoaPesquisada = result.results
        if (this.pessoaPesquisada.length === 0) {
          this.posPesquisa = false
        } else {
          this.posPesquisa = true
        }
      })
    }
  }


}
