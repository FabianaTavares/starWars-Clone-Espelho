import { PersonagemModalComponent } from './personagem-modal/personagem-modal.component';
import { Component, OnInit } from '@angular/core';
/* import { MatDialog } from '@angular/material/dialog';
import { PageEvent } from '@angular/material/paginator'; */
import { Observable, Subject } from 'rxjs';
import { debounceTime, switchMap, tap } from 'rxjs/operators';
import { Router } from '@angular/router';
import { PersonagensModel } from 'src/app/shared/models/interface/personagens.model';
import { PersonagensService } from 'src/app/shared/services/personagens.service';



@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css'],
})
export class PersonagensComponent implements OnInit {
  public personagensArray: PersonagensModel[] = [];
  pageIndex: number = 0;
  pageSize!: number;

  private subjectPesquisa: Subject<string> = new Subject<string>()
  public personSearch!: Observable<any>
  public pessoaPesquisada: PersonagensModel[] = []


  constructor(
    private personagemService: PersonagensService,
   /*  public dialog: MatDialog, */
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

  /* proximaPagina(pe: PageEvent) {
    this.pageIndex = pe.pageIndex;
    this.listarPersonagens(pe.pageIndex + 1);
  }

  openDialog(pessoa: any) {
    this.dialog.open(PersonagemModalComponent, {
      width: '500px',
      height: '500px',
      data: pessoa
    });
  } */

  pesquisar(termoDaBusca: string): void {
    this.subjectPesquisa.next(termoDaBusca) //fica observando o componente
    this.personSearch = this.subjectPesquisa
      .pipe(
        debounceTime(100),//executa a a????o apos 3 segundo
        // switchMap((termo: string) => { //SwitchMap ?? usado para processar apenas a ultima requisi????o feita independente de quantas tenham sito feitas antes
        //   return this.personagemService.pesquisaPersonagem(termo)
        // })
      )

    this.personSearch.subscribe((data: string) => {
      if (data.length >= 3) {
        this.personagemService.pesquisaPersonagem(data).subscribe((result: any) => {
          console.log(result)
          this.pessoaPesquisada = result.results
        })

      } else {
        this.pessoaPesquisada = []
        console.log(this.pessoaPesquisada, 'teste')
      }

    })
    // this.personagemService.pesquisaPersonagem(termoDaBusca).subscribe((data) => {
    //   this.pessoaPesquisada = data.results
    //   console.log(this.pessoaPesquisada)
    // })

  }
}
