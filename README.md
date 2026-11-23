# Prosit 1 – Conference App (Angular 21)

Solution du prosit « Composants, Data-Binding, contrôle de flux natif, directives et pipes ».

## Lancer le projet

```bash
npm install
npm start        # http://localhost:4200
npm test         # 6 tests unitaires (Vitest)
npm run build
```

## 1. Structuration de la page d'accueil

Chaque section est un **composant standalone indépendant** (dossier `src/app/components/`) :

| Composant | Sélecteur | Rôle |
|---|---|---|
| `Header` | `<app-header>` | Bandeau de titre |
| `Navbar` | `<app-navbar>` | Menu de navigation |
| `UserProfile` | `<app-user-profile>` | Profil utilisateur |
| `FriendsList` | `<app-friends-list>` | Liste des amis |
| `Notifications` | `<app-notifications>` | Zone de notifications |
| `ConferenceList` | `<app-conference-list>` | Liste des conférences à venir |
| `Footer` | `<app-footer>` | Pied de page |

`App` (`app.ts` / `app.html`) assemble simplement ces composants.

**Intérêt** : modularité, réutilisation dans d'autres pages, travail en parallèle de plusieurs développeurs,
maintenance facilitée (un fichier TS + HTML + CSS par responsabilité).

## 2. Mécanismes Angular utilisés

| Besoin du prosit | Mécanisme | Où |
|---|---|---|
| Afficher une valeur | Interpolation `{{ }}` | profil, header, footer |
| Parcourir une liste | `@for (... ; track ...)` | amis, conférences, notifications |
| Message si aucune conférence | `@if` / `@else` et `@empty` | `conference-list.html` |
| Titres en majuscules | Pipe `uppercase` | `{{ c.title \| uppercase }}` |
| Date formatée | Pipe `date:'dd/MM/yyyy'` | `{{ c.date \| date: 'dd/MM/yyyy' }}` |
| Bouton vert / orangé / rouge | Directive `[ngClass]` | `buttonClass(c)` |
| Recherche par titre | Two-way binding `[(ngModel)]` + `computed` | `searchTerm` |
| Clic « S'inscrire » : +1 | Event binding `(click)` | `register(c, $event)` |
| Désactiver si complet | Property binding `[disabled]` | bouton rouge |
| Afficher les détails | `(click)` + `@if` | `toggleDetails(c)` |

Les pipes transforment **uniquement l'affichage** : la donnée (`title`, `date`) n'est pas modifiée.

## Règles métier des boutons

- places restantes `>= 10` → **vert**
- `0 < places restantes < 10` → **orangé**
- `places restantes = 0` → **rouge** (bouton désactivé)

Places restantes = `maxParticipants - nbParticipants`. Seules les conférences dont la date est à venir sont affichées.

## Réponse à la question centrale

On découpe l'application en **composants standalone** réutilisables, puis on pilote le template depuis la classe TypeScript avec
le **data-binding** (interpolation, property, event, two-way), le **contrôle de flux natif** (`@if`, `@for`, `@empty`),
les **directives** (`ngClass`) et les **pipes** (`uppercase`, `date`).
