import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'cargando',
    pathMatch: 'full'
  },
  {
    path: 'folder/:id',
    loadChildren: () => import('./folder/folder.module').then( m => m.FolderPageModule)
  },
  {
    path: 'cargando',
    loadChildren: () => import('./pages/cargando/cargando.module').then( m => m.CargandoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'detalle',
    loadChildren: () => import('./pages/detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./pages/registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'ubicacion',
    loadChildren: () => import('./pages/ubicacion/ubicacion.module').then( m => m.UbicacionPageModule)
  },
  {
    path: 'asistencia',
    loadChildren: () => import('./pages/asistencia/asistencia.module').then( m => m.AsistenciaPageModule)
  },
  {
    path: 'perfil',
    loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
  },
  {
    path: 'historial-registros',
    loadChildren: () => import('./pages/historial-registros/historial-registros.module').then( m => m.HistorialRegistrosPageModule)
  },
  {
    path: 'cuentas',
    loadChildren: () => import('./pages/cuentas/cuentas.module').then( m => m.CuentasPageModule)
  },
  {
    path: 'agrear',
    loadChildren: () => import('./pages/cuentas/agrear/agrear.module').then( m => m.AgrearPageModule)
  },
  {
    path: 'recuperacion',
    loadChildren: () => import('./pages/recuperacion/recuperacion.module').then( m => m.RecuperacionPageModule)
  },
  {
    path: 'homedocente',
    loadChildren: () => import('./pages/homedocente/homedocente.module').then( m => m.HomedocentePageModule)
  },
  {
    path: 'registerdocente',
    loadChildren: () => import('./pages/registerdocente/registerdocente.module').then( m => m.RegisterdocentePageModule)
  },
  {
    path: 'logindocente',
    loadChildren: () => import('./pages/logindocente/logindocente.module').then( m => m.LogindocentePageModule)
  },
  {
    path: 'seccionesdocente',
    loadChildren: () => import('./pages/seccionesdocente/seccionesdocente.module').then( m => m.SeccionesdocentePageModule)
  },
  {
    path: 'notasdocente',
    loadChildren: () => import('./pages/notasdocente/notasdocente.module').then( m => m.NotasdocentePageModule)
  },
  {
    path: 'qrdocente',
    loadChildren: () => import('./pages/qrdocente/qrdocente.module').then( m => m.QrdocentePageModule)
  },
  {
    path: 'justificativosdocente',
    loadChildren: () => import('./pages/justificativosdocente/justificativosdocente.module').then( m => m.JustificativosdocentePageModule)
  },
  {
    path: 'cargandoqr',
    loadChildren: () => import('./pages/cargandoqr/cargandoqr.module').then( m => m.CargandoqrPageModule)
  },  {
    path: 'iniciarclas',
    loadChildren: () => import('./pages/iniciarclas/iniciarclas.module').then( m => m.IniciarclasPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./pages/mapa/mapa.module').then( m => m.MapaPageModule)
  },

  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
