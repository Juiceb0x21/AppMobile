import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'home', icon: 'home' },
    { title: 'Registro', url: 'registro', icon: 'people' },
    { title: 'Ubicacion', url: 'ubicacion', icon: 'map' },
    { title: 'Detalle', url: 'detalle', icon: 'podium' },
    { title: 'Asistencia', url: 'asistencia', icon: 'calendar' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
