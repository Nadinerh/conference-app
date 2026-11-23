import { Component, computed, signal } from '@angular/core';
import { DatePipe, NgClass, UpperCasePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Conference } from '../../models/conference';

@Component({
  selector: 'app-conference-list',
  imports: [FormsModule, NgClass, UpperCasePipe, DatePipe],
  templateUrl: './conference-list.html',
  styleUrl: './conference-list.css',
})
export class ConferenceList {
  /** Liste des conférences (source de données du composant). */
  conferences = signal<Conference[]>([
    {
      id: 1,
      title: 'Angular 21 Conference',
      description: 'Découvrez les nouveautés d’Angular 21 : signals, contrôle de flux natif et zoneless.',
      date: new Date(2027, 10, 15),
      place: 'Tunis',
      maxParticipants: 100,
      nbParticipants: 75,
    },
    {
      id: 2,
      title: 'Signals Workshop',
      description: 'Atelier pratique sur la réactivité par signals : signal, computed et effect.',
      date: new Date(2027, 10, 30),
      place: 'Ariana',
      maxParticipants: 50,
      nbParticipants: 44,
    },
    {
      id: 3,
      title: 'Web Conference',
      description: 'Tendances du développement web : performance, accessibilité et architecture.',
      date: new Date(2027, 10, 20),
      place: 'Sousse',
      maxParticipants: 80,
      nbParticipants: 80,
    },
  ]);

  /** Texte saisi dans la zone de recherche (two-way binding). */
  searchTerm = signal('');

  /** Conférence dont les détails sont affichés. */
  selectedId = signal<number | null>(null);

  /** Conférences à venir uniquement. */
  private upcoming = computed(() => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return this.conferences().filter((c) => c.date.getTime() >= today.getTime());
  });

  /** Conférences à venir dont le titre contient le texte recherché. */
  filteredConferences = computed(() => {
    const term = this.searchTerm().trim().toLowerCase();
    return this.upcoming().filter((c) => c.title.toLowerCase().includes(term));
  });

  /** Nombre de places restantes. */
  remainingPlaces(c: Conference): number {
    return c.maxParticipants - c.nbParticipants;
  }

  /** Classe CSS du bouton : vert (disponible), orangé (< 10 places), rouge (complet). */
  buttonClass(c: Conference): string {
    const remaining = this.remainingPlaces(c);
    if (remaining <= 0) return 'btn-red';
    if (remaining < 10) return 'btn-orange';
    return 'btn-green';
  }

  /** Inscription : +1 participant par clic, dans la limite des places. */
  register(c: Conference, event: Event): void {
    event.stopPropagation();
    if (this.remainingPlaces(c) <= 0) return;
    this.conferences.update((list) =>
      list.map((x) => (x.id === c.id ? { ...x, nbParticipants: x.nbParticipants + 1 } : x)),
    );
  }

  /** Affiche / masque les détails d'une conférence. */
  toggleDetails(c: Conference): void {
    this.selectedId.update((id) => (id === c.id ? null : c.id));
  }
}
