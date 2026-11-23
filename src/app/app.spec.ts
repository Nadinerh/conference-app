import { TestBed } from '@angular/core/testing';
import { ConferenceList } from './components/conference-list/conference-list';

describe('ConferenceList', () => {
  function setup() {
    TestBed.configureTestingModule({ imports: [ConferenceList] });
    const fixture = TestBed.createComponent(ConferenceList);
    fixture.detectChanges();
    return fixture;
  }

  it('affiche les 3 conférences à venir', async () => {
    const fixture = setup();
    expect(fixture.nativeElement.querySelectorAll('.card').length).toBe(3);
  });

  it('affiche les titres en majuscules et la date formatée', () => {
    const el: HTMLElement = setup().nativeElement;
    expect(el.textContent).toContain('ANGULAR 21 CONFERENCE');
    expect(el.textContent).toContain('15/11/2027');
  });

  it('applique les couleurs vert / orangé / rouge', () => {
    const el: HTMLElement = setup().nativeElement;
    expect(el.querySelectorAll('.btn-green').length).toBe(1);
    expect(el.querySelectorAll('.btn-orange').length).toBe(1);
    expect(el.querySelectorAll('.btn-red').length).toBe(1);
  });

  it('filtre par titre', () => {
    const fixture = setup();
    fixture.componentInstance.searchTerm.set('signals');
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelectorAll('.card').length).toBe(1);
  });

  it('incrémente nbParticipants à chaque clic', () => {
    const fixture = setup();
    const c = fixture.componentInstance;
    c.register(c.conferences()[0], new Event('click'));
    c.register(c.conferences()[0], new Event('click'));
    expect(c.conferences()[0].nbParticipants).toBe(77);
  });

  it('affiche un message quand la liste est vide', () => {
    const fixture = setup();
    fixture.componentInstance.conferences.set([]);
    fixture.detectChanges();
    expect(fixture.nativeElement.textContent).toContain('Aucune conférence');
  });
});
