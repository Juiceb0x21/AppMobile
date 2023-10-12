import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Alumno } from 'src/app/interfaces/alumno';
import { AlumnosService } from 'src/app/services/alumnos.service';
import { HttpClient } from '@angular/common/http';
import { UsuariosrandomService } from 'src/app/services/usuariosrandom.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {
  newAlumnos: Alumno[] = [];

  user: any;

  constructor(
    private usuariosrandom: UsuariosrandomService,
    private AlumnoServ: AlumnosService,
    private router: Router,
    private http: HttpClient
  ) { }

  ngOnInit() {
    this.usuariosrandom.getRandomUser().subscribe(
      (data) => {
        this.user = data.results[0];
        this.crearUsuarioAleatorio(this.user);
      }
    );
    // Llama a la función para obtener datos aleatorios y crear 20 nuevos alumnos
    this.obtenerDatosAleatoriosYCrearAlumnos(20);
  }

  crearUsuarioAleatorio(user: any) {
    if (user) {
      var usuario = {
        nombre: user.name.first,
        correo: user.email,
        contrasena: user.login.password,
        rut: user.login.username,
      }

      localStorage.setItem('usuario', JSON.stringify(usuario));
    }
  }

  crearAlumno(alumno: Alumno) {
    this.AlumnoServ.CrearAlumno(alumno).subscribe(() => {
      console.log('Nuevo alumno creado');
    });
  }

  // Función para obtener datos aleatorios y crear 20 nuevos alumnos
  obtenerDatosAleatoriosYCrearAlumnos(cantidad: number) {
    for (let i = 0; i < cantidad; i++) {
      this.http.get('https://randomuser.me/api/').subscribe((data: any) => {
        const results = data.results[0];
        const newAlumno: Alumno = {
          rut: '123e',
          nombre: results.name.first,
          apellido: results.name.last,
          correo: results.email,
          contrasena: results.login.password,
          carrera: 'Carrera Aleatoria', 
        };

        // Crea el nuevo alumno
        this.crearAlumno(newAlumno);
      });
    }
  }

  crear20Usuarios() {
    this.obtenerDatosAleatoriosYCrearAlumnos(20);
  }
}
