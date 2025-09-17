import { Component, inject, signal } from '@angular/core';
import { CvListComponent } from "../cv-list/cv-list.component";
import { CvCardComponent } from "../cv-card/cv-card.component";
import { Cv } from '../model/cv.model';
import { CvService } from '../services/cv.service';
import { EmbaucheComponent } from "../embauche/embauche.component";
import { Router } from '@angular/router';
import { TestObservableComponent } from "../../rxjs/test-observable/test-observable.component";

@Component({
  selector: 'app-cv',
  imports: [CvListComponent, CvCardComponent, EmbaucheComponent, TestObservableComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
})
export class CvComponent {
  cvService = inject(CvService);
  cvs = this.cvService.getCvs();
  selectedCv = this.cvService.selectedCv;
  router = inject(Router);

  handleTodos() {
    this.router.navigate(['todo'])
  }
}
