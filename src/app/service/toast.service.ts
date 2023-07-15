import { ToastController } from '@ionic/angular';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(
    private toastController: ToastController
  ) { }

  async showToast(message: any, duration = 5000) {
    const toast = await this.toastController.create({
      message,
      duration,
      position: 'top'
    });
    toast.present();
  }

}
