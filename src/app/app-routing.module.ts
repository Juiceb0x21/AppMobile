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
    path: 'home/:id',
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
  },
  {
    path: 'iniciarclas',
    loadChildren: () => import('./pages/iniciarclas/iniciarclas.module').then( m => m.IniciarclasPageModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./pages/mapa/mapa.module').then( m => m.MapaPageModule)
  },
  {
    path: 'detalleapi/:id',
    loadChildren: () => import('./pages/detalleapi/detalleapi.module').then( m => m.DetalleapiPageModule)
  },
  {
    path: 'alumnos',
    loadChildren: () => import('./alumnos/alumnos.module').then( m => m.AlumnosPageModule)
  },
  {
    path: 'detalle',
    loadChildren: () => import('./app/api/detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
    path: 'agregar',
    loadChildren: () => import('./pages/apiCRUD/agregar/agregar.module').then( m => m.AgregarPageModule)
  },
  {
    path: 'listar',
    loadChildren: () => import('./pages/apiCRUD/listar/listar.module').then( m => m.ListarPageModule)
  },
  {
    path: 'crud',
    loadChildren: () => import('./pages/apiCRUD/crud/crud.module').then( m => m.CrudPageModule)
  },
  {
    path: 'update/:id',
    loadChildren: () => import('./pages/apiCRUD/update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'detalle/:id',
    loadChildren: () => import('./pages/apiCRUD/detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
    path: 'eliminar/:id',
    loadChildren: () => import('./pages/apiCRUD/eliminar/eliminar.module').then( m => m.EliminarPageModule)
  },
  {
    path: 'agregar_clases',
    loadChildren: () => import('./pages/CRUDclases/agregar/agregar.module').then( m => m.AgregarPageModule)
  },
  {
    path: 'crud_clases',
    loadChildren: () => import('./pages/CRUDclases/crud/crud.module').then( m => m.CrudPageModule)
  },
  {
    path: 'detalle_clases/:id',
    loadChildren: () => import('./pages/CRUDclases/detalle/detalle.module').then( m => m.DetallePageModule)
  },
  {
    path: 'eliminar_clases/:id',
    loadChildren: () => import('./pages/CRUDclases/eliminar/eliminar.module').then( m => m.EliminarPageModule)
  },
  {
    path: 'listar_clases',
    loadChildren: () => import('./pages/CRUDclases/listar/listar.module').then( m => m.ListarPageModule)
  },
  {
    path: 'update_clases/:id',
    loadChildren: () => import('./pages/CRUDclases/update/update.module').then( m => m.UpdatePageModule)
  },







  


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
