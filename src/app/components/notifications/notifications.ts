import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.html',
  styleUrl: './notifications.css',
})
export class Notifications {
  notifications: string[] = [
    'Nouvelle conférence : Angular 21 Conference',
    'Rappel : Signals Workshop approche (30/11/2027)',
  ];

  visible = signal(false);

  toggle(): void {
    this.visible.update((v) => !v);
  }
}
