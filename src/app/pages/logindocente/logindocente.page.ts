import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-logindocente',
  templateUrl: './logindocente.page.html',
  styleUrls: ['./logindocente.page.scss'],
})
export class LogindocentePage implements OnInit {

  formularioLoginDocente: FormGroup;

  constructor(private router: Router, public fb: FormBuilder, public alertController: AlertController) { 
    this.formularioLoginDocente = this.fb.group({
      'rut': new FormControl("", Validators.required),
      'correo': new FormControl("", Validators.required),
      'password': new FormControl("", Validators.required),
    });
  }

  ngOnInit() {
  }

  async loginDocente() {
    var d = this.formularioLoginDocente.value;

    var docenteString = localStorage.getItem('docente');

    if (docenteString !== null) {
      var docente = JSON.parse(docenteString);
      if (docente.correo == d.correo && docente.password == d.password && docente.rut == d.rut) {
        console.log('Ingresado');
        localStorage.setItem('ingresado', 'true');
        this.router.navigate(['homedocente']);
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

}
