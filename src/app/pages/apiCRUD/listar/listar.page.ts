import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import { AlumnosService } from 'src/app/services/alumnos.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  alumnos: any[] = [];


  constructor(private alumnosServ:AlumnosService, private LoadingCtr: LoadingController) { }
  
  ionViewWillEnter(){
    this.loadAlumnos()
  }


  ngOnInit() {
  }

  async loadAlumnos(event?: InfiniteScrollCustomEvent){
    const loading = await this.LoadingCtr.create({
      message: "Cargando",
      spinner: "bubbles"
     }
    );
    await loading.present();


     this.alumnosServ.ListarAlumnos().subscribe(
      (resp) => {
        console.log(resp); 
        loading.dismiss();
        let ListStrign = JSON.stringify(resp)
        this.alumnos = JSON.parse(ListStrign)
        event?.target.complete();
      },
      (err) =>{
        console.log(err.message)
        loading.dismiss(); 
      }
     )
  }

}
