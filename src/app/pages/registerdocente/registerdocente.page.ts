import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-registerdocente',
  templateUrl: './registerdocente.page.html',
  styleUrls: ['./registerdocente.page.scss'],
})
export class RegisterdocentePage implements OnInit {

  formularioRegistroDocente: FormGroup;

  constructor(private router: Router, public fb: FormBuilder, public alertController: AlertController, private toastController: ToastController) {
    this.formularioRegistroDocente = this.fb.group({
      'correo': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
      'rut': new FormControl("", Validators.required),
      'sede': new FormControl("", Validators.required),
    });
   }

  ngOnInit() {
  }

  async mensajeToast(mensaje:string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000,
      position: 'top'
    });
    toast.present()
  }

  async registerDocente(){
    var d = this.formularioRegistroDocente.value;

    if(this.formularioRegistroDocente.invalid){
      const alert = await this.alertController.create({
        header: 'Registro no valido',
        message: 'Campos sin datos.',
        buttons: ['Aceptar']
      } );
      await alert.present();
      return;
    } else {
      this.mensajeToast('Se registro correctamente, ahora debe iniciar sesion');
    }

    var docente = {
      correo: d.correo,
      password: d.password,
      rut: d.rut,
      sede: d.sede,
    }

    localStorage.setItem('docente', JSON.stringify(docente));

    this.router.navigate(['logindocente'])
  }

}
