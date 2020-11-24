import { Component } from '@angular/core';
import { ConfirmationService, Message, PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ConfirmationService]
})
export class AppComponent {
  title = 'regist3r-ui';

  msgs: Message[] = [];


    constructor(private confirmationService: ConfirmationService, private primengConfig: PrimeNGConfig) {}

    ngOnInit() {
      this.primengConfig.ripple = true;
    }

}
