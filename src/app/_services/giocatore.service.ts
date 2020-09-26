import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Constants} from '../_models/constants';
import {Giocatore} from '../_models/giocatore';

@Injectable({
  providedIn: 'root'
})
export class GiocatoreService {

  constructor(private http: HttpClient) {
  }

  getMaschi() {
    const api = Constants.APIURL + 'giocatore/readAll.php?g=m';
    return this.http.get<Giocatore[]>(api);
  }

  getFemmine() {
    const api = Constants.APIURL + 'giocatore/readAll.php?g=f';
    return this.http.get<Giocatore[]>(api);
  }
}
