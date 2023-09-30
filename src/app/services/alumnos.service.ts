import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ialumnos } from '../interfaces/ialumnos';
import { Alumno } from '../interfaces/alumno';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(private http:HttpClient) { }

  ListarAlumnos(): Observable<Ialumnos>{
    return this.http.get<Ialumnos>(`${environment.apiURL}/alumnos`)
  }

  CrearAlumno(newAlumno: Alumno):Observable<Alumno>{
    return this.http.post<Alumno>(`${environment.apiURL}/alumnos`, newAlumno)
   }

   getAlumnoByid(id:String):Observable<Ialumnos>{
    return this.http.get<Ialumnos>(`${environment.apiURL}/alumnos/?id=${id}`)
   }

   actualizarAlumno(alumno:any):Observable<Ialumnos>{
    return this.http.put<Ialumnos>(`${environment.apiURL}/alumnos/${alumno.id}`,alumno)
   }

   eliminarAlumnoById(alumno:any):Observable<Ialumnos>{
    return this.http.delete<Ialumnos>(`${environment.apiURL}/alumnos/${alumno.id}`)
   }
}


