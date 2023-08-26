import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { CuentasserviceService } from 'src/app/services/cuentasservice.service';


@Component({
  selector: 'app-agrear',
  templateUrl: './agrear.page.html',
  styleUrls: ['./agrear.page.scss'],
})
export class AgrearPage implements OnInit {

  constructor(
    private cuentasServices: CuentasserviceService,
    private toastController:ToastController,
    private router:Router
  ) { }

  ngOnInit() {
  }

  async mensajeToast(mensaje: string){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 2000,
      position:'bottom'
    }); 
    toast.present();
  }

  addCuenta(nombre: any, correo: any) {
    this.cuentasServices.addCuenta(nombre.value, correo.value);
    this.mensajeToast("Cuenta agregada correctamente");
    this.router.navigate(['/cuentas']);
  }

}
