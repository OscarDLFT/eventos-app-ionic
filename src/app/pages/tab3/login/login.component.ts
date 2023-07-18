import { ToastService } from './../../../service/toast.service';
import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { User } from 'src/app/models/user';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent  implements OnInit {

  public user!: User;

  constructor(
    private auth: AuthService,
    private toastService: ToastService,
    private translate: TranslateService,
  ) { }

  ngOnInit() {
    this.user = new User();
  }

  login(): void {
    this.auth.login(this.user.email, this.user.password)
    .then(result => {
      console.log(result);
      this.toastService.showToast(this.translate.instant('label.login.success'));
    }).catch(e => {
      this.toastService.showToast(this.translate.instant('label.login.error'));
    })
  }

}
