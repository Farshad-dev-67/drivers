import {Component, OnInit} from '@angular/core';
import {MessagingService} from './service/messaging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isShown = false;
  message;
  constructor(private messagingService: MessagingService) { }

  ngOnInit(): void {
    this.messagingService.requestPermission();
    this.messagingService.receiveMessage();
    this.message = this.messagingService.currentMessage;
  }
}
