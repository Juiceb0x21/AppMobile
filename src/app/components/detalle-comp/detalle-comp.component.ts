import { Component, Input, OnInit } from '@angular/core';
import { Route, Router} from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Gesture, GestureController } from '@ionic/angular';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-detalle-comp',
  templateUrl: './detalle-comp.component.html',
  styleUrls: ['./detalle-comp.component.scss'],
})
export class DetalleCompComponent  implements OnInit {

  usuario: any; 

  @Input() nombre!: string;
  @Input() rut!: string;
  @Input() sede!: string;
  @Input() fechahora!: string;
  constructor(private router: Router, private menu: MenuController, private routerOutlet: IonRouterOutlet, private gestureCtrl: GestureController) { }

  ngOnInit() {
    this.menu.enable(true);
    this.routerOutlet.swipeGesture = false;
    this.usuario = JSON.parse(localStorage.getItem('usuario') || "")
  }

}
