import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../_models/constants';
import {Giocatore} from '../_models/giocatore';
import { Squadra } from '../_models/squadra';

@Injectable({
  providedIn: 'root'
})
export class SquadraService {

  constructor(private http: HttpClient) { }

  readAll() {
    const api = Constants.APIURL + 'squadra/readAll.php';
    return this.http.get<Squadra[]>(api);
  }
}
