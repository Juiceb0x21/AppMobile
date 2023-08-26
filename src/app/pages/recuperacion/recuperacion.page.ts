import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recuperacion',
  templateUrl: './recuperacion.page.html',
  styleUrls: ['./recuperacion.page.scss'],
})
export class RecuperacionPage implements OnInit {

  formularioRecuperacion: FormGroup;

  constructor(private router: Router, public fb: FormBuilder, public alertController: AlertController, private toastController: ToastController) { 
    this.formularioRecuperacion = this.fb.group({
      'correo': new FormControl("", Validators.required)
    });
  }

  ngOnInit() {
  }

  async recuperar(){
    var f = this.formularioRecuperacion.value;

    var usuarioString = localStorage.getItem('usuario');

    if (usuarioString !== null) {
      var usuario = JSON.parse(usuarioString);
      if (usuario.correo == f.correo) {
        console.log('Enviado');
        localStorage.setItem('Enviado', 'true');
        this.mensajeToast('Se envio un mensaje de recuperacion a su correo');
        this.router.navigate(['login'])
      } else {
        const alert = await this.alertController.create({
          header: 'Correo no valido',
          message: 'El correo que escribio no es valido o no se encuentra registrado.',
          buttons: ['Aceptar'],
        });
        await alert.present()
        return;
      }
    } else {
      // Manejo de caso cuando no se encuentra el valor en localStorage
    }
  }

  async mensajeToast(mensaje:string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000,
      position: 'top'
    });
    toast.present()
  }


}
