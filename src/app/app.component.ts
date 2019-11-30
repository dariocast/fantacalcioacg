import { Component } from '@angular/core';
import {AuthService} from './_services/auth.service';
import {Squadra} from './_models/squadra';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fantacalcio ACG';
  current: Squadra;

  constructor(public auth: AuthService) {
    this.current = this.auth.squadraCorrenteValue;
  }

  navLinks = [
    { label: 'Quotazioni', path: '/quotazioni' },
    { label: 'Regolamento', path: '/regolamento' },
    { label: 'Formazioni', path: '/formazioni' },
    { label: 'Schiera formazione', path: '/schiera-formazione' },
    { label: 'Pannello di Controllo', path: '/admin-dashboard' }
  ];

  logout() {
    this.auth.logout();
  }
}
