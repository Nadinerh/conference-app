import { Component } from '@angular/core';

@Component({
  selector: 'app-notifications',
  imports: [],
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  notiflist = [
    {id: 1, message: 'You have a new friend request from John.'},
    {id: 2, message: 'Your post has been liked by Sarah.'},
    {id: 3, message: 'You have a new message from Alex.'},
  ];
  show= false;
  btnText: "Show Notifications" | "Hide Notifications" | undefined;
  
  ;
  showNotifications() {
    this.show = !this.show;
    this.btnText = this.show ? 'Hide Notifications' : 'Show Notifications';
  }
}
