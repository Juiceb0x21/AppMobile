
import { Router } from '@angular/router';
import { Component, ViewChild, OnInit  } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  isModalOpen = false;

  alumno = {
    id: "a",
    rut:"a",
    nombre:"a",
    apellido:"a",
    correo:"a",
    contrasena:"",
    carrera:"a"
  }
 
  constructor(private router: Router, public fb: FormBuilder, public alertController: AlertController, private toastController: ToastController,private alumnoServ:AlumnosService) {

   }

   ngOnInit() {
  }

  ionViewWillEnter(){
    this.getAlumnoByID(this.getIdFromURL())
  }


  getIdFromURL(){
    let url = this.router.url
    let arr = url.split("/",3)
    let id = String(arr[2])
    return id
  }

  getAlumnoByID(alumnoID:String){
    this.alumnoServ.getAlumnoByid(alumnoID).subscribe(
      (resp:any) => {
        this.alumno = {
          id: resp[0].id,
          rut: resp[0].rut,
          nombre: resp[0].nombre,
          apellido: resp[0].apellido,
          correo: resp[0].correo,
          contrasena: resp[0].contrasena,
          carrera: resp[0].carrera
        }
      }
    )
  }



  perfil() {
    this.router.navigate(['perfil'])
  }

  login() {
    this.router.navigate(['login'])
  }
}
