import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { Gender } from './gender-enum';

@Component({
  selector: 'gender-selector',
  templateUrl: './gender-selector.component.html',
  styleUrls: [ './gender-selector.component.scss' ],
  providers: [
    { provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => GenderSelectorComponent), multi: true },
  ],
})
export class GenderSelectorComponent implements ControlValueAccessor {
  gender: Gender;

  female = Gender.Female;
  male = Gender.Male;

  registeredOnChangeCallback: (_) => { };
  registeredOnTouchedCallback: (_) => { };

  writeValue(val: Gender) {
    if (val) {
      this.gender = val;
    } else {
      this.gender = Gender.Unset;
    }
  }

  registerOnChange(fn: (_) => { }) {
    this.registeredOnChangeCallback = fn;
  }

  registerOnTouched(fn: (_) => { }) {
    this.registeredOnTouchedCallback = fn;
  }
}
