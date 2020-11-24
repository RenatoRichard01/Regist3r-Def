import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Estabelecimento } from '../model/estabelecimento';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {
  private url = 'http://localhost:8080/api/register/estabelecimento'

  constructor(private http: HttpClient) { }

  addEstabelecimento(item: Estabelecimento): Promise<Estabelecimento[]>{
    const params = {"nome": item.nome, "endereco": item.endereco, "telefone": item.telefone};
    const headers = new HttpHeaders() .append('Content-Type', 'application/json');
    return this.http.post<Estabelecimento[]>(`${this.url}/create`, params , {headers}).toPromise();
  }

  getEstabelecimento(): Observable<HttpResponse<Estabelecimento[]>>{
    return this.http.get<Estabelecimento[]>(`${this.url}/getEstabelecimento`, { observe: 'response' });
  }
  getNameEstabelecimento(): Observable<HttpResponse<Estabelecimento[]>>{
    return this.http.get<Estabelecimento[]>(`${this.url}/getNameEstabelecimento`, { observe: 'response' });
  }

  delete = (id: number): Observable<{}> =>
    this.http.delete(`${this.url}/remove/${id}`)
      .pipe(catchError((err: any) => this.catchError(err, 'Erro ao deletar estabelecimento.', null)));

  public update(item: Estabelecimento): Observable<Estabelecimento>{
    const headers = new HttpHeaders() .append('Content-Type', 'application/json');
    return this.http.put(`${this.url}/update`, item, { observe: 'response', headers})
      .pipe(
        catchError((err: any) => this.catchError(err, 'Erro ao editar estabelecimento.', null))
      );
  }

    public vincular(item: Estabelecimento): Observable<Estabelecimento>{
    const headers = new HttpHeaders() .append('Content-Type', 'application/json');
    console.log(item);
    return this.http.put<Estabelecimento[]>(`${this.url}/vincular`, item, { observe: 'response', headers})
    .pipe(
      catchError((err: any) => this.catchError(err, 'Erro ao editar estabelecimento.', null))
    );
  }

  private catchError<T>(err: any, message: string = 'Erro ao buscar estabelecimento.', ret: T = null): Observable<T> {
    console.log(message, err);
    return throwError(ret);
  }
}
