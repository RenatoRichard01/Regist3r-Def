import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Estabelecimento } from 'src/app/estabelecimento/model/estabelecimento';

@Injectable({
  providedIn: 'root'
})
export class RelacaoService {
  private url = 'http://localhost:8080/api/register/estabelecimento'

  constructor(private http: HttpClient) { }

  getRelacionamentos(): Observable<HttpResponse<Estabelecimento[]>>{
    return this.http.get<Estabelecimento[]>(`${this.url}/getRelacionamento`, { observe: 'response' });
  }


}
