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
  Cuenta!: Cuenta;

  constructor(
    private router:Router,
    private cuentasServices: CuentasserviceService,
    private toastController: ToastController,
    private alertController:AlertController,
    private activatedRoute: ActivatedRoute,
    
  ) { }

  ngOnInit() {
    this.listaCuentas = this.cuentasServices.getAll();

    this.activatedRoute.paramMap.subscribe(param => {
      const aux = param.get('id')
      if (aux){
        this.Cuenta = this.cuentasServices.getCuenta(aux);
        console.log(this.Cuenta)
      }
    })
  }

  ionViewWillEnter(){
    //this.listaJugadores = this.jugadoresservices.getAll();
  }

  listar(){
    this.listaCuentas = this.cuentasServices.getAll();
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

  async deleteCuenta(){
    const alert = await this.alertController.create({
      header:'Eliminar cuenta',
      message: '¿estas seguro que deseas eliminar la cuenta?',
      buttons:[
        {
          text: 'Si',
          handler: () => {
            if(this.Cuenta && this.Cuenta.id !== undefined){
              this.cuentasServices.deleteCuenta(this.Cuenta.id)
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


