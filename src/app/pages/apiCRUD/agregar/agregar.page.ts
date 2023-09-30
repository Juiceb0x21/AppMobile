import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/interfaces/alumno';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {


  newAlumno:Alumno = {
    rut: "",
    nombre: "",
    apellido: "",
    correo: "",
    numerotele: "",
    carrera: ""
  }
    
  


  constructor(
    private AlumnoServ:AlumnosService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  crearAlumno(){
    this.AlumnoServ.CrearAlumno(this.newAlumno).subscribe()
    this.router.navigateByUrl("/listar")
  }

}
