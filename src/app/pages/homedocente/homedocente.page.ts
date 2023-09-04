import { Component, Input, OnInit } from '@angular/core';
import { Route, Router} from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Gesture, GestureController } from '@ionic/angular';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-homedocente',
  templateUrl: './homedocente.page.html',
  styleUrls: ['./homedocente.page.scss'],
})
export class HomedocentePage implements OnInit {

  docente:any;

  constructor(private router: Router, private menu: MenuController, private routerOutlet: IonRouterOutlet, private gestureCtrl: GestureController) { }

  ngOnInit() {
    this.menu.enable(false);
    this.routerOutlet.swipeGesture = false;
    this.docente = JSON.parse(localStorage.getItem('docente') || "")

  }

  login(){
    this.router.navigate(["logindocente"])
  }

}
