import { AbstractControl, ValidationErrors } from "@angular/forms";

export function ageCinValidator(form: AbstractControl): null | ValidationErrors {
  let cin = form.get('cin')?.value;
  const age = form.get('age')?.value;
  if (!cin || ! age) return null;
  cin = cin.substring(0,2);

  if ((cin < 20 && age <60 ) || (cin >= 20 && age >=60)) return {ageCin: `L'age et le cin ne sont pas synchrone`};
  return null;
}
