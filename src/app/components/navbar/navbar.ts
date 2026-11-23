import { Component, signal } from '@angular/core';

interface NavLink {
  label: string;
  target: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  links: NavLink[] = [
    { label: 'Accueil', target: 'accueil' },
    { label: 'Profil', target: 'profil' },
    { label: 'Conférences', target: 'conferences' },
    { label: 'Amis', target: 'amis' },
    { label: 'Notifications', target: 'notifications' },
    { label: 'Admin', target: 'admin' },
  ];

  active = signal('accueil');

  select(target: string): void {
    this.active.set(target);
  }
}
