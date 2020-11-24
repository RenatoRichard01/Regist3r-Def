import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';

import { Estabelecimento } from './model/estabelecimento';
import { EstabelecimentoService } from './service/estabelecimento.service';

@Component({
  selector: 'app-estabelecimento',
  templateUrl: './estabelecimento.component.html',
  styleUrls: ['./estabelecimento.component.css']
})
export class EstabelecimentoComponent implements OnInit{

  public dataset: Estabelecimento[];
  estabelecimentoObj = new Estabelecimento();
  estabDialog: boolean;
  submitted = false;

  @ViewChild('tabela') grid;
  constructor(
    private estabelecimentoService: EstabelecimentoService,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
    ){}

  ngOnInit(){
    this.getDataEstabelecimento();
  }

  adicionar(item: Estabelecimento){
    if (item.endereco !== null && item.endereco.trim() !== null
      && item.telefone.trim() !== null){
      this.estabelecimentoService.addEstabelecimento(item).then(
        () => {
          this.messageService.add({severity: 'success', summary: 'Success', detail: 'Sucesso ao adicionar item'});
          this.getDataEstabelecimento();
        }
      );
    }
  }
  limparDataInvalida(campo){
    console.log(campo);
  }

  confirmaDell(item: Estabelecimento) {
    this.confirmationService.confirm({
      message: 'Voce realmente deseja excluir?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.removeEstabelecimento(item);
      }
    });
  }

  getDataEstabelecimento(){
    this.dataset = null;
    this.estabelecimentoService.getEstabelecimento()
      .subscribe(
        response => {
          if (response) {
            this.dataset = response.body;
          }
        },
        error => { }
      );
  }

  removeEstabelecimento(item: Estabelecimento){
    this.estabelecimentoService.delete(item.id).subscribe(
      () => {
        if ( this.grid.first === 0){
          this.getDataEstabelecimento();
        } else {
          this.grid.first = 0;
          this.getDataEstabelecimento();
        }
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Sucesso ao excluir item'});
      },
      error => {
        this.messageService.add({severity: 'erro', summary: 'Warn', detail: 'Erro ao excluir estabelecimento'});
      }
    )
  }

  editarEstab(item: Estabelecimento){
    this.estabelecimentoObj = {...item};
    this.estabDialog = true;
  }

  editar(item: Estabelecimento){
    if(item.id){
      this.estabelecimentoService.update(item).subscribe(
        () => {
          this.messageService.add({severity: 'success', summary: 'Sucess', detail: 'Sucessp ao editar item'});
          this.estabDialog = false;
          this.getDataEstabelecimento();
        }
      )
    }
  }



}
