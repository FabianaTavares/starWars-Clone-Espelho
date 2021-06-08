import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { Observable, Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Personagens } from 'src/app/shared/interface/personagens';
import { PersonagensService } from 'src/app/shared/services/personagens.service';
import { PersonagemModalComponent } from '../personagens/personagem-modal/personagem-modal.component';
import { debounceTime } from 'rxjs/operators';
import { LEADING_TRIVIA_CHARS } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-personagens-herois',
  templateUrl: './personagens-herois.component.html',
  styleUrls: ['./personagens-herois.component.css']
})
export class PersonagensHeroisComponent implements OnInit {
  public personagensArray: Personagens[] = [];
  pageIndex: number = 0;
  pageSize!: number;


  posPesquisa: boolean = true
  private subjectPesquisa: Subject<string> = new Subject<string>()
  personSearch!: Observable<any>
  public pessoaPesquisada: Personagens[] = []
  name = new FormControl('')
  public paginator: boolean = false



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

  pesquisarPersonagem() {
    const pesquisa = this.name.value

    if (pesquisa < 10) {
      this.paginator = true
    } else {
      this.paginator = false
    }
    this.personagemService.pesquisaPersonagem(pesquisa).subscribe((result: any) => {
      console.log(result)
      this.pessoaPesquisada = result.results
      console.log(result.results)
      if (this.pessoaPesquisada.length === 0) {
        this.posPesquisa = false
      } else {
        this.posPesquisa = true
      }
    })

  }



  pesquisar(termoDaBusca: string): void {
    console.log(this.name)
    this.subjectPesquisa.next(termoDaBusca) //fica observando o componente
    this.personSearch = this.subjectPesquisa
      .pipe(
        debounceTime(100),//executa a ação apos 3 segundo
        // switchMap((termo: string) => { //SwitchMap é usado para processar apenas a ultima requisição feita independente de quantas tenham sito feitas antes
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
