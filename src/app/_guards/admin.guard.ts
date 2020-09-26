import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {AuthService} from '../_services/auth.service';
import {map, take, tap} from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private snackBar: MatSnackBar, private auth: AuthService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    return this.auth.squadraCorrente.pipe(
      take(1),
      map(squadra => squadra.admin),
      tap(isAdmin => {
        if (!isAdmin) {
          console.log('Non sei un admin');
          this.openSnackBar();
        }
      })
    );
  }

  openSnackBar() {
    this.snackBar.open('Accesso consentito solo agli amministratori!', 'Ok');
  }
}
