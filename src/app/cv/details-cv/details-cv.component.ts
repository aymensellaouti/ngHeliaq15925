import { Component, inject, signal } from "@angular/core";
import { Cv } from "../model/cv.model";
import { ActivatedRoute, Router } from "@angular/router";
import { CvService } from "../services/cv.service";
import { APP_ROUTES } from "../../config/app-routes.config";
import { DefaultImagePipe } from "../pipes/default-image.pipe";

@Component({
  selector: 'app-details-cv',
  templateUrl: './details-cv.component.html',
  styleUrls: ['./details-cv.component.css'],
  imports: [DefaultImagePipe]
})
export class DetailsCvComponent {
  cv = signal<Cv | null>(null);
  acr = inject(ActivatedRoute);
  cvService = inject(CvService);
  router = inject(Router);
  constructor() {
    const id = this.acr.snapshot.params['id'];
    this.cvService.getCvById(id).subscribe({
      next: (cv) => this.cv.set(cv),
      error: (e) => {
        this.router.navigate([APP_ROUTES.cv]);
      }
    });
    // if (!this.cv()) {

    // }
  }

  delete() {
    const cv = this.cv();
    if (cv) {
      this.cvService.deleteCv(cv);
      this.router.navigate([APP_ROUTES.cv]);
    }
  }
}
