import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-friends',
  imports: [FormsModule],            // obligatoire pour [(ngModel)]
  templateUrl: './friends.html',
  styleUrl: './friends.css',
})
export class Friends {
  name = signal('Ahmed');
  friends = ['Sami', 'Sarra', 'Amine'];
}