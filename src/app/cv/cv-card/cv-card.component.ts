import { Component, input } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-cv-card',
  imports: [],
  templateUrl: './cv-card.component.html',
  styleUrl: './cv-card.component.css',
})
export class CvCardComponent {
  cv = input<Cv|null>(null);
}
