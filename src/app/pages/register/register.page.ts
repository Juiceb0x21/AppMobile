import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  formularioRegistro: FormGroup;

  constructor(private router: Router, public fb: FormBuilder, public alertController: AlertController) 
  { 
    this.formularioRegistro = this.fb.group({
      'nombre': new FormControl("", Validators.required),
      'correo': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'confirmacionPassword': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }

  login() {
    this.router.navigate(['login'])
  }



  async register(){
    var f = this.formularioRegistro.value;

    if(this.formularioRegistro.invalid){
      const alert = await this.alertController.create({
        header: 'Registro no valido',
        message: 'Campos sin datos.',
        buttons: ['Aceptar']
      });

      await alert.present();
      return;
    }

    var usuario = {
      nombre: f.nombre,
      correo: f.correo,
      password: f.password
    }

    localStorage.setItem('usuario', JSON.stringify(usuario));

    this.router.navigate(['login'])
  }
  
}
