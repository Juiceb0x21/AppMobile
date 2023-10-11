import { Component, OnInit } from '@angular/core';
import { InfiniteScrollCustomEvent, LoadingController } from '@ionic/angular';
import {  SClasesService } from 'src/app/services/sclases.service';
@Component({
  selector: 'app-listar',
  templateUrl: './listar.page.html',
  styleUrls: ['./listar.page.scss'],
})
export class ListarPage implements OnInit {

  clases: any[] = [];


  constructor(private clasesServ:SClasesService, private LoadingCtr: LoadingController) { }

  ionViewWillEnter(){
    this.loadClases()
  }


  ngOnInit() {
  }

  async loadClases(event?: InfiniteScrollCustomEvent){
    const loading = await this.LoadingCtr.create({
      message: "Cargando",
      spinner: "bubbles"
     }
    );
    await loading.present();


     this.clasesServ.ListarClase().subscribe(
      (resp) => {
        console.log(resp); 
        loading.dismiss();
        let ListStrign = JSON.stringify(resp)
        this.clases = JSON.parse(ListStrign)
        event?.target.complete();
      },
      (err) =>{
        console.log(err.message)
        loading.dismiss(); 
      }
     )
  }

}
