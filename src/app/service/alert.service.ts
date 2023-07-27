import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private alertController: AlertController,
    private translate: TranslateService
  ) { }

  async alertConfirm(header: string, message: string, functionOk: () => void) {
    const alert = await this.alertController.create({
      header,
      message,
      buttons: [
        {
          text: this.translate.instant('label.cancel.text'),
          role: 'cancel',
          handler: () => {

          }
        }, {
          text: this.translate.instant('label.ok.text'),
          handler: () => {
            functionOk();
          }
        }
      ]
    });

    await alert.present();
  }

  async alertSuccess(header: string, message: string) {
    const alert = await this.alertController.create({
      header, message, buttons: ['OK']
    });

    await alert.present();
  }

}

