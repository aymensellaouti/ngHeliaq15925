import { Component, input } from '@angular/core';
import { Cv } from '../model/cv.model';
import { DefaultImagePipe } from '../pipes/default-image.pipe';

@Component({
  selector: 'app-cv-card',
  imports: [DefaultImagePipe],
  templateUrl: './cv-card.component.html',
  styleUrl: './cv-card.component.css',
})
export class CvCardComponent {
  cv = input<Cv|null>(null);
}
