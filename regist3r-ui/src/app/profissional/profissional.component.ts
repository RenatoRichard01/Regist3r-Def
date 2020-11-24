import { Component, OnInit, ViewChild } from '@angular/core';
import { ConfirmationService, Message, MessageService, PrimeNGConfig } from 'primeng/api';
import { ProfissionalService } from 'src/app/profissional/services/profissional.service';

import { Profissional } from './model/profissional';

@Component({
  selector: 'app-profissional',
  templateUrl: './profissional.component.html',
  styleUrls: ['./profissional.component.css']
})
export class ProfissionalComponent implements OnInit{

  public dataset: Profissional[];
  profDialog: boolean;
  prof = new Profissional();

  @ViewChild('tabela') grid;
  msgs: Message[] = [];

  constructor(private profissionalService: ProfissionalService,
    private confirmationService: ConfirmationService,
    private primengConfig: PrimeNGConfig,
    private messageService: MessageService){}


  ngOnInit(){
    this.getDataProfissionais();
    this.primengConfig.ripple = true;
  }

  adicionar(item: Profissional){
    if (item.nome?.toString() !== null && item.endereco !== null
      && item.celular !== null && item.funcao !== null){
      this.profissionalService.addFuncionario(item).then(
        () => {
          console.log(item.nome?.valueOf().trim(), item.endereco, item.celular, item.funcao);
          this.messageService.add({severity: 'success', summary: 'Success', detail: 'Sucesso ao adicionar item'});
          this.getDataProfissionais();
        }
      );
    }else{
      this.messageService.add({severity: 'success', summary: 'Success', detail: 'PREENCHA TODOS OS CAMPOS'});
    }
  }

  confirmaDell(item: Profissional) {
      this.confirmationService.confirm({
          message: 'Voce realmente deseja excluir?',
          header: 'Confirmation',
          icon: 'pi pi-exclamation-triangle',
          accept: () => {
              this.removeProfissional(item);
              this.getDataProfissionais();
          }
      });
  }

  getDataProfissionais(){
    this.dataset = null;
    this.profissionalService.getProfissionais()
      .subscribe(
        response => {
          if (response) {
            this.dataset = response.body;
            console.log(this.dataset);
          }
        }
      );
  }

  removeProfissional(item: Profissional){
    this.profissionalService.delete(item.id).subscribe(
      () => {
        if ( this.grid.first === 0){
          this.getDataProfissionais();
        } else{
          this.grid.first = 0;
          this.getDataProfissionais();
        }
        this.messageService.add({severity: 'success', summary: 'Success', detail: 'Sucesso ao excluir item'});
      },
      error => {this.messageService.add({severity: 'erro', summary: 'Warn', detail: 'Erro ao excluir Profissional'})}

    );
  }

  editProf(prof: Profissional){
    this.prof = {...prof};
    this.profDialog = true;
  }

  editar(item: Profissional){
    if (item.id){
      this.profissionalService.update(item).subscribe(
        () => {
          this.messageService.add({severity: 'success', summary: 'Success', detail: 'Sucesso ao editar item ' });
          this.profDialog = false;
          this.getDataProfissionais();
        },
        error => {}
      );
    }
  }

}
