import { Component , signal} from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  title= signal('conferencia App');
  msg= signal('Welcome to your user dashboard');
}
