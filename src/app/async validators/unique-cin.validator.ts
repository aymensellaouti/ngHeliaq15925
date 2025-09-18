import { AbstractControl, AsyncValidatorFn } from "@angular/forms";
import { CvService } from "../cv/services/cv.service";
import { map, of } from "rxjs";

export function uniueCinValidator(cvService: CvService): AsyncValidatorFn {
  return (control: AbstractControl) => {
    const cin = control.value;
    if (!cin) return of(null);
    return cvService.selectByProperty('cin', cin).pipe(
      map(cvs => !cvs.length ? null : {uniqueCin: 'Le cin doit être unique'})
    )
  }
}
