import { PersonagemModalComponent } from './personagem-modal/personagem-modal.component';
import { Component, OnInit } from '@angular/core';

import { PersonagensService } from 'src/app/services/personagens.service';
import { Personagens } from './interface/personagens';
import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator';
import { Observable, Subject } from 'rxjs';
import { debounceTime, switchMap } from 'rxjs/operators';
import { UpperCasePipe } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css'],
})
export class PersonagensComponent implements OnInit {
  public personagensArray: Personagens[] = [];
  pageIndex: number = 0;
  pageSize!: number;

  private subjectPesquisa: Subject<string> = new Subject<string>()
  public personSearch!: Observable<Personagens[]>
  public pessoaPesquisada: Personagens[] = []


  constructor(
    private personagemService: PersonagensService,
    public dialog: MatDialog,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.listarPersonagens(1);

  }

  listarPersonagens(numeroPagin: number) {
    this.personagemService.getPersonagem(numeroPagin).subscribe(
      (personagem) => {
        this.personagensArray = personagem.results;
        this.pageSize = personagem.count;
      },
      (err) => {
        this.router.navigate(['/erro'])
        console.log(err)
      }
    );
  }

  proximaPagina(pe: PageEvent) {
    this.pageIndex = pe.pageIndex;
    this.listarPersonagens(pe.pageIndex + 1);
  }

  openDialog(pessoa: any) {
    this.dialog.open(PersonagemModalComponent, {
      width: '500px',
      height: '500px',
      data: pessoa


    });
  }

  pesquisar(termoDaBusca: string): void {
    this.subjectPesquisa.next(termoDaBusca) //fica observando o componente
    this.personSearch = this.subjectPesquisa
      .pipe(
        debounceTime(100),//executa a ação apos 3 segundo
        switchMap((termo: string) => { //SwitchMap é usado para processar apenas a ultima requisição feita independente de quantas tenham sito feitas antes
          return this.personagemService.pesquisaPersonagem(termo)
        }))

    this.personSearch.subscribe((data: any) => {
      this.pessoaPesquisada = data.results

    })
    // this.personagemService.pesquisaPersonagem(termoDaBusca).subscribe((data) => {
    //   this.pessoaPesquisada = data.results
    //   console.log(this.pessoaPesquisada)
    // })

  }
}
