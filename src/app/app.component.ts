import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: 'home', icon: 'home' },
    { title: 'Historial Registros', url: 'historial-registros', icon: 'people' },
    { title: 'Historial Ubicacion', url: 'ubicacion', icon: 'map' },
    { title: 'Asistencia', url: 'asistencia', icon: 'calendar' },
    { title: 'Cuentas', url: 'cuentas', icon: 'people' },
    { title: 'Crud', url: 'crud', icon: 'people' },
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
