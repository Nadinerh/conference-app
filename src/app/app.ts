import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './Components/header/header';
import { Navbar } from './Components/navbar/navbar';
import { Friends } from './Components/friends/friends';
import { Notifications } from './Components/notifications/notifications';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Navbar,Friends,Notifications],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('mon-projet');
}
