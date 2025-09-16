import { Component, input } from '@angular/core';
import { Cv } from '../model/cv.model';

@Component({
  selector: 'app-cv-item',
  imports: [],
  templateUrl: './cv-item.component.html',
  styleUrl: './cv-item.component.css'
})
export class CvItemComponent {
  cv = input.required<Cv>();
}
