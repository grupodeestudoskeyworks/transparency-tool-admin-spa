import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'switcher',
  templateUrl: './switcher.component.html',
  styleUrls: [ './switcher.component.scss' ],
})
export class SwitcherComponent {
  @Input() value: boolean;
  @Output() valueChange = new EventEmitter<boolean>();

  change(value: boolean) {
    this.value = value;
    this.valueChange.emit(this.value);
  }
}
