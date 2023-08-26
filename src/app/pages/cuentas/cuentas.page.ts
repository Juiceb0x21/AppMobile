import { Component, OnInit } from '@angular/core';
import { CuentasserviceService } from 'src/app/services/cuentasservice.service';
import { Cuenta } from './cuentas.model';
import { Router, ActivatedRoute } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-cuentas',
  templateUrl: './cuentas.page.html',
  styleUrls: ['./cuentas.page.scss'],
})
export class CuentasPage implements OnInit {

  listaCuentas: Cuenta[] = [];
  cuenta!: Cuenta;

  constructor(
    private router:Router,
    private cuentasServices: CuentasserviceService,
    private toastController: ToastController,
    private alertController:AlertController,
    private activatedRoute: ActivatedRoute,
    
  ) { }

  ngOnInit() {
    this.listaCuentas = this.cuentasServices.getAll();
    console.log(this.listaCuentas);
    this.activatedRoute.paramMap.subscribe(param => {
      const aux = param.get('id')
      if (aux){
        this.cuenta = this.cuentasServices.getCuenta(aux);
        console.log(this.cuenta)
      }
    })
  }

  ionViewWillEnter(){
    this.listar();
    
  }

  listar(){
    this.listaCuentas = this.cuentasServices.getAll();
    console.log(this.listaCuentas);
    console.log(this.cuenta);
  }

  addCuenta(){
    this.router.navigate(['/agrear'])
  }

  handleRefresh(event: any){
    setTimeout(() => {
      this.listar();
      event.target.complete();
    }, 2000);
  }

  buscarCuenta(event: any){
    const texto = event.target.value;
    if(texto && texto.trim() != ''){
      this.listaCuentas = this.listaCuentas.filter((aux: any) => {
        return(aux.correo.toLowCase().indexOf(texto.toLowCase()) >- 1)
      })
    } else {
      this.listar();
    }
  }

  async mensajeToast(mensaje:string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 3000,
      position: 'bottom'
    });
    toast.present()
  }

  async deleteCuenta(id: any){
    const alert = await this.alertController.create({
      header:'Eliminar cuenta',
      message: '¿estas seguro que deseas eliminar la cuenta?',
      buttons:[
        {
          text: 'Si',
          handler: () => {
            if(id !== undefined){
              this.cuentasServices.deleteCuenta(id)
              this.mensajeToast('Cuenta eliminada correctamente');
              this.router.navigate(['/cuentas'])
            } else {
              this.mensajeToast('ERROR: Cuenta no definida');
            }
          }
        },
        {
          text: 'No',
          handler: () => {
            this.mensajeToast('Accion cancelada correctamente');
          }
        }
      ]
    });
    await alert.present();
    let resutado = await alert.onDidDismiss();
  }
}

