import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-comp',
  templateUrl: './home-comp.component.html',
  styleUrls: ['./home-comp.component.scss'],
})
export class HomeCompComponent  implements OnInit {

  @Input() nombre!:string;
  @Input() correo!: string;

  constructor() { }

  ngOnInit() {}

}
