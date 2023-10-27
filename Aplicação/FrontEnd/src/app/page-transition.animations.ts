import { trigger, transition, style, animate } from '@angular/animations';

export const pageTransition = trigger('pageTransition', [
  transition(':enter', [
    style({ opacity: 0 }),
    animate('500ms', style({ opacity: 1 })),
  ]),
  transition(':leave', [
    animate('500ms', style({ opacity: 0 })),
  ]),
]);