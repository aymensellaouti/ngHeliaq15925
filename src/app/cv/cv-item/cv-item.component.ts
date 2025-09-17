import { Component, inject, input, output } from '@angular/core';
import { Cv } from '../model/cv.model';
import { DefaultImagePipe } from '../pipes/default-image.pipe';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-cv-item',
  imports: [DefaultImagePipe],
  templateUrl: './cv-item.component.html',
  styleUrl: './cv-item.component.css'
})
export class CvItemComponent {
  cv = input.required<Cv>();
  cvService = inject(CvService);
  // selectCv = output<Cv>();
  size = input(50);
  onSelectCv() {
    this.cvService.selectCv(this.cv());
    //this.selectCv.emit(this.cv());
  }
}
