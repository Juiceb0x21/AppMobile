import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.page.html',
  styleUrls: ['./update.page.scss'],
})

export class UpdatePage implements OnInit {

  alumno = {
    id: "",
    rut: "",
    nombre: "",
    apellido: "",
    correo: "",
    contrasena: "",
    carrera: ""
  }


  constructor(private alumnoServ:AlumnosService, private router:Router) { }

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

  getAlumnoByID(alumnoID: string) {
    this.alumnoServ.getAlumnoByid(alumnoID).subscribe(
      (resp: any) => {
        this.alumno = {
          id: resp[0].id,
          rut: resp[0].rut,
          nombre: resp[0].nombre,
          apellido: resp[0].apellido,
          correo: resp[0].correo,
          contrasena: resp[0].contrasena, // Corrected field name
          carrera: resp[0].carrera
        };
      }
    );
  }
  


  updateAlumno(){
    this.alumnoServ.actualizarAlumno(this.alumno).subscribe()
    this.router.navigateByUrl("/listar")
  }
}
