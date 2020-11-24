import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { ProfissionalService } from 'src/app/profissional/services/profissional.service';

import { Estabelecimento } from '../estabelecimento/model/estabelecimento';
import { Profissional } from '../profissional/model/profissional';
import { EstabelecimentoService } from './../estabelecimento/service/estabelecimento.service';
import { RelacaoService } from './service/relacao.service';


@Component({
  selector: 'app-relacao',
  templateUrl: './relacao.component.html',
  styleUrls: ['./relacao.component.css']
})
export class RelacaoComponent implements OnInit{
  public dataset: Profissional[];
  public dataEstab: Estabelecimento[];
  public dataEstabGet: Estabelecimento[];
  profissionais = [];
  relac = new Estabelecimento();
  uniao = new Estabelecimento();
  prof = new Profissional();
  estab = new Estabelecimento();


  constructor(
    private profissionalService: ProfissionalService,
    private estabelecimentoService: EstabelecimentoService,
    private relacaoService: RelacaoService,
    private messageService: MessageService
  ){}

  ngOnInit(){
    this.carregarProfissionais();
    this.getDataRelacao();
  }

  carregarProfissionais(){
   return this.profissionalService.getNameProfissionais().subscribe(
     response => {
       if (response) {
         this.dataset = response.body;
         this.carregarEstabelecimentos();
       }
     }
   );
  }

  carregarEstabelecimentos(){
    return this.estabelecimentoService.getNameEstabelecimento().subscribe(
      response => {
        if (response) {
          this.dataEstab = response.body;
        }
      }
    );
  }

  vincular(estabelec: number, profis: number){
    this.uniao.id = estabelec;
    this.uniao.idProfissional = profis;
    return this.estabelecimentoService.vincular(this.uniao).subscribe(
      () => {
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Sucesso ao vincular item'});
        this.getDataRelacao();
        this.carregarProfissionais();
      }
    );
  }

  getDataRelacao(){
    this.dataEstabGet = null;
    this.relacaoService.getRelacionamentos()
      .subscribe(
        response => {
          if (response){
            this.dataEstabGet = response.body;
          }
        },
        error => { }
      );
  }




}
