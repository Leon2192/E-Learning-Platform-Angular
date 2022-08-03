import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router
  ) {
    this.form = this.fb.group({
      usuario: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  ingresar() {
    const usuario = this.form.value.usuario;
    const password = this.form.value.password;

    if (usuario == 'leonardo' && password == 'arrieta') {
      //this.loading = true;

      this.load();
    } else {
      // Pasa otra cosa
      this.error();
      this.form.reset();
    }
  }

  load() {
    this.loading = true;
    setTimeout(() => {
      // Redirect
      //this.loading = false;
      this.router.navigate(['dashboard']);
    }, 5000);
  }

  error() {
    this._snackBar.open('Usuario o contraseña son inválidos', '', {
      duration: 5000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
