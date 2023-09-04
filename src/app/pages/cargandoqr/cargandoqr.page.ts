import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-cargandoqr',
  templateUrl: './cargandoqr.page.html',
  styleUrls: ['./cargandoqr.page.scss'],
})
export class CargandoqrPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['qrdocente']), (['homedocente']);
    }, 2000)
  }

}
