import { Profissional } from './../../profissional/model/profissional';
export class Estabelecimento{
  id: number;
  nome: string;
  endereco: string;
  telefone: string;
  idProfissional: number;
  profissional: Profissional;
}
