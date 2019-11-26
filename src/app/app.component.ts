import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Fantacalcio ACG';

  navLinks = [
    { label: 'Quotazioni', path: '/quotazioni' },
    { label: 'Regolamento', path: '/regolamento' },
    { label: 'Formazioni', path: '/formazioni' },
    { label: 'Schiera formazione', path: '/schiera-formazione' },
    { label: 'Pannello di Controllo', path: '/admin-dashboard' }
  ];

}
