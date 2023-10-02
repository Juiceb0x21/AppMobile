import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosrandomService } from 'src/app/services/usuariosrandom.service';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  loginForm: FormGroup;
  user: any;
  emailValue?: string;
  passValue?: string;
  errorMessage: string = '';

  constructor(
    private router: Router,
    private usuariosrandom: UsuariosrandomService,
    private formBuilder: FormBuilder,
    public alertController: AlertController
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(1)]],
    });
  }

  ngOnInit() {
    this.usuariosrandom.getRandomUser().subscribe(
      (data) => {
        this.user = data.results[0];
        this.emailValue = this.user.email;
        this.passValue = this.user.login.password;

        var usuario = {
          nombre: this.user.name.first,
          correo: this.user.email,
          password: this.user.login.password,
          rut: this.user.login.username,
        }

        localStorage.setItem('usuario', JSON.stringify(usuario));
      }
    );
  }

  async login() {
    var u = this.loginForm.value;

    console.log('Valores del formulario:');
    console.log(u);

    var usuarioString = localStorage.getItem('usuario');

    if (usuarioString !== null) {
      var usuario = JSON.parse(usuarioString);

      console.log('Valores en localStorage:');
      console.log(usuario);

      if (usuario.correo == u.email && usuario.password == u.password) {
        console.log('Ingresado');
        localStorage.setItem('ingresado', 'true');
        this.router.navigate(['/home'])
      } else {
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'Los datos son incorrectos o no se encuentran datos',
          buttons: ['Aceptar'],
        });
        await alert.present();
        return;
      }
    } else {
      // Manejo de caso cuando no se encuentra el valor en localStorage
    }
  }
}

