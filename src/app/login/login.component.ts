import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {AuthService} from '../_services/auth.service';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
              private route: ActivatedRoute,
              private router: Router,
              private authenticationService: AuthService
  ) {
    // redirect to home if already logged in
    if (this.authenticationService.squadraCorrenteValue) {
      this.router.navigate(['']);
    }
  }

  form: FormGroup = new FormGroup({
    nomeSquadra: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  ngOnInit() {
  }

  submit() {
    if (this.form.valid) {
      this.authenticationService.login(this.form.value.nomeSquadra, this.form.value.password)
        .pipe(first())
        .subscribe(
          data => {
            this.router.navigate(['']);
          },
          error => {
            console.log(error);
          });
    }
  }

}
