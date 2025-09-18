import { Component, inject, signal } from '@angular/core';
import { CvListComponent } from "../cv-list/cv-list.component";
import { CvCardComponent } from "../cv-card/cv-card.component";
import { Cv } from '../model/cv.model';
import { CvService } from '../services/cv.service';
import { EmbaucheComponent } from "../embauche/embauche.component";
import { Router } from '@angular/router';
import { TestObservableComponent } from "../../rxjs/test-observable/test-observable.component";
import { ToastrService } from 'ngx-toastr';
import { LoggerToken } from '../../injection tokens/logger.injectionToken';
import { Logger2Service } from '../../services/logger2.service';
import { Logger3Service } from '../../services/logger3.service';

@Component({
  selector: 'app-cv',
  imports: [CvListComponent, CvCardComponent, EmbaucheComponent],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css',
  providers: [
    {
          provide: LoggerToken,
          useClass: Logger2Service,
          multi:true
        },
        {
          provide: LoggerToken,
          useClass: Logger3Service,
          multi: true
        },
  ]
})
export class CvComponent {
  cvService = inject(CvService);
  loggers = inject(LoggerToken);
  cvs = signal<Cv[]>([]);
  selectedCv = this.cvService.selectedCv;
  router = inject(Router);
  toaster = inject(ToastrService);
  handleTodos() {
    this.router.navigate(['todo'])
  }
  constructor() {
    this.loggers.forEach(logger => logger.log('cc'));
    this.cvService.getCvs().subscribe({
      next: (cvs) => {
        this.cvs.set(cvs);
      },
      error: (e) => {
        this.cvs.set(this.cvService.getFakeCvs()());
        this.toaster.error(`Les données sont fictives merci de contacter l'admin`)
      }
    })
  }
}
