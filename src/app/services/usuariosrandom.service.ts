import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class UsuariosrandomService {

  constructor(private httpClient: HttpClient) { }

  getRandomUser(): Observable<any> {
    return this.httpClient.get('https://randomuser.me/api');
    
  }

}
