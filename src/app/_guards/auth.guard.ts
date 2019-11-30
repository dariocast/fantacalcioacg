import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {map, take, tap} from 'rxjs/operators';
import {AuthService} from '../_services/auth.service';
import {MatSnackBar} from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private snackBar: MatSnackBar, private auth: AuthService, private router: Router) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {

    return this.auth.squadraCorrente.pipe(
      take(1),
      map(user => !!user), // <-- map to boolean
      tap(loggedIn => {
        if (!loggedIn) {
          console.log('Accesso non consentito');
          this.openSnackBar();
          this.router.navigate(['/login']);
        }
      })
    );
  }

  openSnackBar() {
    this.snackBar.open('Accedi prima con il tuo account!', 'Ok');
  }
}
