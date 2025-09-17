import { Component, inject, input } from '@angular/core';
import { Cv } from '../model/cv.model';
import { DefaultImagePipe } from '../pipes/default-image.pipe';
import { EmbaucheService } from '../services/embauche.service';
import { ToastrService } from 'ngx-toastr';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cv-card',
  imports: [DefaultImagePipe, RouterLink],
  templateUrl: './cv-card.component.html',
  styleUrl: './cv-card.component.css',
})
export class CvCardComponent {
  cv = input<Cv | null>(null);
  embaucheService = inject(EmbaucheService);
  toastr = inject(ToastrService);
  embaucher() {
    const cv = this.cv();
    if (cv) {
      if (this.embaucheService.embauche(cv)) {
        this.toastr.success(`${cv.firstname} ${cv.name} a été pré embauché avec succès :)`);
      } else {
        this.toastr.warning(`${cv.firstname} ${cv.name} est déjà pré embauché :(`);
      }
    }
  }
}
