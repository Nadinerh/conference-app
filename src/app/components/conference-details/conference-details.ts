import { Component, computed, input, output } from '@angular/core';
import { DatePipe } from '@angular/common';
import { Conference } from '../../models/conference';

@Component({
  selector: 'app-conference-details',
  imports: [DatePipe],
  templateUrl: './conference-details.html',
  styleUrl: './conference-details.css',
})
export class ConferenceDetails {
  /** Parent -> enfant : conférence sélectionnée dans la liste. */
  conference = input<Conference | null>(null);

  /** Enfant -> parent : l'utilisateur clique sur « S'inscrire » dans le détail. */
  registered = output<Conference>();

  remainingPlaces = computed(() => {
    const c = this.conference();
    return c ? c.maxParticipants - c.nbParticipants : 0;
  });

  register(): void {
    const c = this.conference();
    if (c && this.remainingPlaces() > 0) {
      this.registered.emit(c);
    }
  }
}