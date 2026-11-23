import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friends-list',
  imports: [FormsModule],
  templateUrl: './friends-list.html',
  styleUrl: './friends-list.css',
})
export class FriendsList {
  // Valeur partagée par les 3 champs : two-way data binding [(ngModel)]
  name = signal('Ahmed');

  friends: string[] = ['Sami', 'Sarra', 'Amine'];
}
