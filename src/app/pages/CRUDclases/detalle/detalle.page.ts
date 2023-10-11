import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SClasesService } from 'src/app/services/sclases.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.page.html',
  styleUrls: ['./detalle.page.scss'],
})
export class DetallePage implements OnInit {

  clase = {
    id: 0,
    seccion: "DC007",
    profesor: "Juju",
    fecha:  new Date(2023, 8, 22),
    materia: "Programacion web"
  }

  constructor(
    private ClaseServ:SClasesService,
    private router: Router
  ) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  ionViewWillEnter(){
    this.getClaseByID(this.getIdFromURL().toString()); // Convertir el número a cadena
  }


  getIdFromURL(){
    let url = this.router.url
    let arr = url.split("/",3)
    let id = Number(arr[2])
    return id
  }

  getClaseByID(claseID:String){
    this.ClaseServ.getClaseByid(Number(claseID)).subscribe(
      (resp:any) => {
        this.clase = {
          id: resp[0].id,
          seccion: resp[0].seccion,
          profesor: resp[0].profesor,
          fecha: resp[0].fecha,
          materia: resp[0].materia
        }
      }
    )
  }
}
