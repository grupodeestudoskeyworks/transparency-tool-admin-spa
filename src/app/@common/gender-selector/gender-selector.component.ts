import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Gender } from './gender-enum';

@Component({
  selector: 'gender-selector',
  templateUrl: './gender-selector.component.html',
  styleUrls: [ './gender-selector.component.scss' ],
})
export class GenderSelectorComponent {
  @Input() gender: Gender;
  @Output() genderChange = new EventEmitter<Gender>();

  female = Gender.Female;
  male = Gender.Male;

  setGender(gender: Gender) {
    this.gender = gender;
    this.genderChange.emit(this.gender);
  }
}
