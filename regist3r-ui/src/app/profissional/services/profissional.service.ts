import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Profissional } from './../model/profissional';

@Injectable({
  providedIn: 'root'
})
export class ProfissionalService {
  private url = 'http://localhost:8080/api/register'
  constructor(private http: HttpClient) { }

  addFuncionario(item: Profissional): Promise<Profissional[]>{
    const params = { "nome": item.nome, "endereco": item.endereco, "celular": item.celular, "funcao": item.funcao,
      "residencial":item.residencial};
    const headers = new HttpHeaders() .append('Content-Type', 'application/json');
    return this.http.post<Profissional[]>(`${this.url}/create`, params , {headers}).toPromise();
  }

  getProfissionais(): Observable<HttpResponse<Profissional[]>>{
    return this.http.get<Profissional[]>(`${this.url}/getProfissional`, { observe: 'response' });
  }
  getNameProfissionais(): Observable<HttpResponse<Profissional[]>>{
    return this.http.get<Profissional[]>(`${this.url}/getNameProfissionais`, { observe: 'response' });
  }

  delete = (id: number): Observable<{}> =>
    this.http.delete(`${this.url}/remove/${id}`)
     .pipe(catchError((err: any) => this.catchError(err, 'Erro ao deletar profissional.', null)));

  public update(item: Profissional): Observable<Profissional> {
    const headers = new HttpHeaders() .append('Content-Type', 'application/json');
    return this.http.put(`${this.url}/update`, item, { observe: 'response', headers})
      .pipe(
        catchError((err: any) => this.catchError(err, 'Erro ao deletar profissional.', null))
      );
  }



  private catchError<T>(err: any, message: string = 'Erro ao buscar profissionais.', ret: T = null): Observable<T> {
    console.log(message, err);
    return throwError(ret);
  }



}
