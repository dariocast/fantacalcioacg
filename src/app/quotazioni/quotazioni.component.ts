import {Component, OnInit, ViewChild} from '@angular/core';
import {GiocatoreService} from '../_services/giocatore.service';
import {Giocatore} from '../_models/giocatore';
import {Observable} from 'rxjs';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-quotazioni',
  templateUrl: './quotazioni.component.html',
  styleUrls: ['./quotazioni.component.css']
})
export class QuotazioniComponent implements OnInit {
  displayedColumns: string[] = ['nome', 'gruppo', 'ruolo', 'costo'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('sorterM', {static: true}) sorterM: MatSort;
  @ViewChild('sorterF', {static: true}) sorterF: MatSort;

  dataSourceM: MatTableDataSource<Giocatore>;
  dataSourceF: MatTableDataSource<Giocatore>;


  constructor(public service: GiocatoreService) {

    service.getMaschi().subscribe(
      response => {
        this.dataSourceM = new MatTableDataSource(response);
        this.dataSourceM.sort = this.sorterM;
      }
    );
    service.getFemmine().subscribe(
      response => {
        this.dataSourceF = new MatTableDataSource(response);
        this.dataSourceF.sort = this.sorterF;
      }
    );
  }

  ngOnInit() {
  }

}
