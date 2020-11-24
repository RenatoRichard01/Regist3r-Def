import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { MessageService } from 'primeng/api';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { DialogModule } from 'primeng/dialog';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { InputMaskModule } from 'primeng/inputmask';

import { AppComponent } from './app.component';
import { EstabelecimentoComponent } from './estabelecimento/estabelecimento.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProfissionalComponent } from './profissional/profissional.component';
import { ProfissionalService } from './profissional/services/profissional.service';
import { RelacaoComponent } from './relacao/relacao.component';




const rotas: Routes = [
  { path: '', component: ProfissionalComponent},
  { path: 'estabelecimentos', component: EstabelecimentoComponent},
  { path: 'relacao', component: RelacaoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    ProfissionalComponent,
    EstabelecimentoComponent,
    RelacaoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    InputTextModule,
    ConfirmDialogModule,
    TableModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MessagesModule,
    FormsModule,
    ToastModule,
    DialogModule,
    RouterModule.forRoot(rotas),
    DropdownModule,
    InputMaskModule
  ],
  providers: [
    ProfissionalService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
