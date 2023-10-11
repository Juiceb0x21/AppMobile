import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Iclase } from 'src/app/interfaces/iclase';
import {  SClasesService } from 'src/app/services/sclases.service';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.page.html',
  styleUrls: ['./agregar.page.scss'],
})
export class AgregarPage implements OnInit {

  newClase:Iclase = {
    seccion: "DC007",
    profesor: "Juju",
    fecha:  new Date(2023, 8, 22),
    materia: "Programacion web"
  }

  constructor(
    private ClaseServ:SClasesService,
    private router: Router
  ) { }

  ngOnInit() {
  }

  crearClase(){
    this.ClaseServ.CrearClase(this.newClase).subscribe()
    this.router.navigateByUrl('/listar_clases')
  }

}
