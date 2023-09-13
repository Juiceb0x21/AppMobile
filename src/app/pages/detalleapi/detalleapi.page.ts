import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detalleapi',
  templateUrl: './detalleapi.page.html',
  styleUrls: ['./detalleapi.page.scss'],
})
export class DetalleapiPage implements OnInit {
  personaje: any; // Variable para almacenar los detalles del personaje

  constructor(
    private activatedRoute: ActivatedRoute,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    // Obtener el parámetro 'id' de la URL
    this.activatedRoute.params.subscribe(params => {
      const personajeId = params['id'];
      this.cargarDetalle(personajeId);
    });
  }

  cargarDetalle(id: number) {
    const url = `https://rickandmortyapi.com/api/character/${id}`;
    this.httpClient.get<any>(url).subscribe(result => {
      this.personaje = result; // Almacenar los detalles del personaje
    });
  }
}

