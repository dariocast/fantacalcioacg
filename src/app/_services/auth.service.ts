import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Squadra} from '../_models/squadra';
import {map} from 'rxjs/operators';
import {Constants} from '../_models/constants';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private squadraCorrenteSubject: BehaviorSubject<Squadra>;
  public squadraCorrente: Observable<Squadra>;

  constructor(private http: HttpClient) {
    this.squadraCorrenteSubject = new BehaviorSubject<Squadra>(JSON.parse(localStorage.getItem('squadraCorrente')));
    this.squadraCorrente = this.squadraCorrenteSubject.asObservable();
  }

  public get squadraCorrenteValue(): Squadra {
    return this.squadraCorrenteSubject.value;
  }

  login(nome: string, password: string) {
    const api = Constants.APIURL + 'squadra/login.php';
    return this.http.post<any>(api, { nome, password }, Constants.HTTPHEADERS)
      .pipe(map(squadra => {
        // login successful if there's a jwt token in the response
        if (squadra) {
          // store user details and jwt token in local storage to keep user logged in between page refreshes
          localStorage.setItem('squadraCorrente', JSON.stringify(squadra));
          this.squadraCorrenteSubject.next(squadra);
        }

        return squadra;
      }));
  }

  logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('squadraCorrente');
    this.squadraCorrenteSubject.next(null);
  }
}
