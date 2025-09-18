import { Component, inject } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CvService } from '../services/cv.service';
import { Cv } from '../model/cv.model';
import { APP_ROUTES } from '../../config/app-routes.config';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-cv',
  imports: [ReactiveFormsModule],
  templateUrl: './add-cv.component.html',
  styleUrl: './add-cv.component.css',
})
export class AddCvComponent {
  formBuilder = inject(FormBuilder);
  cvService = inject(CvService);
  router = inject(Router);
  toastr = inject(ToastrService);

  form = this.formBuilder.group(
    {
      name: ['', Validators.required],
      firstname: ['', Validators.required],
      path: [''],
      job: ['', Validators.required],
      cin: [
        '',
        {
          validators: [Validators.required, Validators.pattern('[0-9]{8}')],
        },
      ],
      age: [
        0,
        {
          validators: [Validators.required],
        },
      ],
    },
    {
      validators: [],
      asyncValidators: [],
    }
  );
  addCv() {
    this.cvService.addCv(this.form.getRawValue() as Cv).subscribe({
      next: () => this.router.navigate([APP_ROUTES.cv]),
      error: () =>
        this.toastr.error(
          `Il y a quelque chose qui cloche veuillez contacter l'admin`
        ),
    });
  }
  get name(): AbstractControl {
    return this.form.get('name')!;
  }
  get firstname() {
    return this.form.get('firstname');
  }
  get age(): AbstractControl {
    return this.form.get('age')!;
  }
  get job() {
    return this.form.get('job');
  }
  get path() {
    return this.form.get('path');
  }
  get cin(): AbstractControl {
    return this.form.get('cin')!;
  }
}
