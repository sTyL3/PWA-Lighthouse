import { Component, OnInit } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { MessagingService } from './services/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'pwasian';

  constructor(private swPush: SwPush, private msgService: MessagingService) { }

  async ngOnInit() {
    // this.subscribeToWebPush();
    this.msgService.requestPermission();
    this.msgService.listen();
    // this.message = this.msgService.currentMessage;
  }

  subscribeToWebPush() {
    this.swPush.requestSubscription({
      serverPublicKey: 'BPiK55VbuU022_i9u_NXHt40rUbCeY2jpJ9fndzyrks422Prm_3imnQ3s6SKejBr1GrLKzRaIj4doi8IQKLTPg4',
    }).then((sub) => {
      console.log('subscribeToWebPush successful');
      console.log(JSON.stringify(sub));
    }).catch((err) => {
      console.log('subscribeToWebPush error', err);
    });
  }
}
