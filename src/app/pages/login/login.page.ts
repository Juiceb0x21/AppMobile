import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formularioLogin: FormGroup;

  constructor(private router: Router, public fb: FormBuilder, public alertController: AlertController) 
  { 
    this.formularioLogin = this.fb.group({
      'correo': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }

  
  async login() {
    var f = this.formularioLogin.value;

    var usuarioString = localStorage.getItem('usuario');

    if (usuarioString !== null) {
      var usuario = JSON.parse(usuarioString);
      if (usuario.correo == f.correo && usuario.password == f.password) {
        console.log('Ingresado');
        localStorage.setItem('ingresado', 'true');
        this.router.navigate(['home'])
      } else {
        const alert = await this.alertController.create({
          header: 'Datos incorrectos',
          message: 'Los datos son incorrectos o no se encuentran datos',
          buttons: ['Aceptar'],
        });
        await alert.present()
        return;
      }
    } else {
      // Manejo de caso cuando no se encuentra el valor en localStorage
    }
  } 

  register(){
    this.router.navigate(['register'])
  }

  docente(){
    this.router.navigate(['logindocente'])
  }
}
