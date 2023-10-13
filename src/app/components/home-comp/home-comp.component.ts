import { Component, Input, OnInit } from '@angular/core';
import { Route, Router} from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Gesture, GestureController } from '@ionic/angular';
import { IonRouterOutlet } from '@ionic/angular';

@Component({
  selector: 'app-home-comp',
  templateUrl: './home-comp.component.html',
  styleUrls: ['./home-comp.component.scss'],
})
export class HomeCompComponent  implements OnInit {


  constructor(private router: Router, private menu: MenuController, private routerOutlet: IonRouterOutlet, private gestureCtrl: GestureController) { }

  ngOnInit() {

  }

}
