
import { Router } from '@angular/router';
import { Component, ViewChild, OnInit  } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { AlertController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  isModalOpen = false;

 
  constructor(private router: Router, public fb: FormBuilder, public alertController: AlertController, private toastController: ToastController) {

   }

  ngOnInit() {
  }


  perfil() {
    this.router.navigate(['perfil'])
  }

  login() {
    this.router.navigate(['login'])
  }

  
  


  

  

}
