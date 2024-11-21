import { AbstractControl } from '@angular/forms';

export function avoidWordValidator(formControl: AbstractControl) {
  if (formControl.value.includes('hack')) {
    return { prohibitedWord: true };
  }

  return null;
}
