import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-detalle-comp',
  templateUrl: './detalle-comp.component.html',
  styleUrls: ['./detalle-comp.component.scss'],
})
export class DetalleCompComponent  implements OnInit {

  @Input() nombre!: string;
  @Input() rut!: string;
  @Input() sede!: string;
  @Input() fechahora!: string;
  constructor() { }

  ngOnInit() {}

}
