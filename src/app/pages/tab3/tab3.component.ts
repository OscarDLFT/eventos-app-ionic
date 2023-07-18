import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.component.html',
  styleUrls: ['./tab3.component.scss'],
})
export class Tab3Component  implements OnInit {

  constructor(
    public auth: AuthService,
  ) { }

  ngOnInit() {}

  logout(): void {
    this.auth.logout();
  }

}
