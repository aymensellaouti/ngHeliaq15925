import { Component, signal, Signal } from '@angular/core';
import { CvListComponent } from "../cv-list/cv-list.component";
import { CvCardComponent } from "../cv-card/cv-card.component";
import { Cv } from '../model/cv.model';
import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-cv',
  imports: [CvListComponent, CvCardComponent, HighlightDirective],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent {
  cvs = signal<Cv[]>([
    new Cv(
      1,
      'aymen',
      'sellaouti',
      43,
      'enseignant',
      '12345678',
      'rotating_card_profile3.png'
    ),
    new Cv(
      2,
      'emilie',
      'robert',
      20,
      'Dév',
      '12345678',
      'rotating_card_profile.png'
    ),
    new Cv(
      3,
      'laurant',
      'dubos',
      20,
      'Dév',
      '12345678',
      'rotating_card_profile2.png'
    ),
  ]);
  selectedCv = signal<Cv | null>(null);
}
