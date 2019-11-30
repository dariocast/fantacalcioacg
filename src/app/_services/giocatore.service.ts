import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../_models/constants';
import {map} from 'rxjs/operators';
import {Giocatore} from '../_models/giocatore';

@Injectable({
  providedIn: 'root'
})
export class GiocatoreService {

  constructor(private http: HttpClient) {
  }

  getMaschi() {
    const api = Constants.APIURL + 'giocatore/getGiocatori.php';
    return this.http.get<Giocatore[]>(api);
  }

  getFemmine() {
    const api = Constants.APIURL + 'giocatore/getGiocatrici.php';
    return this.http.get<Giocatore[]>(api);
  }
}
