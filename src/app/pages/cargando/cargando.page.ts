import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cargando',
  templateUrl: './cargando.page.html',
  styleUrls: ['./cargando.page.scss'],
})
export class CargandoPage implements OnInit {

  constructor(private router: Router) { }

    ngOnInit() {
      setTimeout(() => {
      this.router.navigate(['login']), (['principal']);
    }, 2000)
  }

  

}