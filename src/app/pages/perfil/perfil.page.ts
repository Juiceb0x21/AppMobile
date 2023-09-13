import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
})
export class PerfilPage implements OnInit {

  personajes: any[] = []; // Cambiar 'digimons' a 'personajes'

  paginaActual = 0; // Cambiar la página inicial a 1

  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    const url = `https://rickandmortyapi.com/api/character?page=${this.paginaActual}`;
    this.httpClient.get<any>(url).subscribe(result => {
      this.personajes = result.results; // Cambiar de 'content' a 'results'
    });
  }

  cargarMasDatos() {
    this.paginaActual++;
    this.cargarDatos();
  }

  cargarSiguientePagina() {
    this.paginaActual++;
    this.cargarDatos();
  }

  cargarAnteriorPagina() {
    if (this.paginaActual > 1) {
      this.paginaActual--;
      this.cargarDatos();
    }
  }
}
