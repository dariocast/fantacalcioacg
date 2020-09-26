import {Component, OnInit, ViewChild} from '@angular/core';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Squadra } from '../_models/squadra';
import { SquadraService } from '../_services/squadra.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  displayedColumns: string[] = ['nome', 'allenatore', 'punteggio'];
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  @ViewChild('sorter', {static: true}) sorter: MatSort;

  dataSource: MatTableDataSource<Squadra>;


  constructor(public service: SquadraService) {

    service.readAll().subscribe(
      response => {
        this.dataSource = new MatTableDataSource(response);
        this.dataSource.sort = this.sorter;
      }
    );
  }

  ngOnInit() {
  }

}
