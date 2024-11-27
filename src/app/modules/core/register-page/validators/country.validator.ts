import { AbstractControl, ValidationErrors } from "@angular/forms";

export function countryValidator(control: AbstractControl): ValidationErrors | null {
  return control.value === 'Canada' ? null : { countryInvalid: true };
}
