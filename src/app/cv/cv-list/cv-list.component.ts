import { Component, input, output } from '@angular/core';
import { Cv } from '../model/cv.model';
import { CvItemComponent } from "../cv-item/cv-item.component";

@Component({
  selector: 'app-cv-list',
  imports: [CvItemComponent],
  templateUrl: './cv-list.component.html',
  styleUrl: './cv-list.component.css',
})
export class CvListComponent {
  cvs = input<Cv[]>([]) ;
  forwardCv = output<Cv>();
}
