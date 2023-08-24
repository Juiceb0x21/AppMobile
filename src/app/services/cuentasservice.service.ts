import { Injectable } from '@angular/core';
import { Cuenta } from '../pages/cuentas/cuentas.model';

@Injectable({
  providedIn: 'root'
})
export class CuentasserviceService {

cuentas: Cuenta[] = [
  {
    id: '1',
    nombre: 'bryan Pinto',
    correo: 'brya.pinto@duocuc.cl'
  },
  {
    id: '2',
    nombre: 'Alex Oliva',
    correo: 'ale.oliva@duocuc.cl'
  },
  {
    id: '3',
    nombre: 'Alex Pavez',
    correo: 'al.pavezf@duocuc.cl'
  },

]
  constructor() { }

  getAll(){
    return [...this.cuentas]
  }

  getCuenta(id : string){
    return {
      ...this.cuentas.find(aux => {
        return aux.id === id
      })
    }
  }

  deleteCuenta(id: string){
    this.cuentas = this.cuentas.filter( aux => {
      return aux.id !== id
    })
  }

  addCuenta(nombre:string, correo:string){
    this.cuentas.push({
      nombre, correo, id: this.cuentas.length + 1 + ""
    })
  }

}
