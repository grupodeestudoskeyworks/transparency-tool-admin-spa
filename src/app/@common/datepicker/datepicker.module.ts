import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgSlimScrollModule } from 'ngx-slimscroll';
import { DatepickerComponent } from './datepicker.component';

@NgModule({
  declarations: [ DatepickerComponent ],
  imports: [ CommonModule, FormsModule, NgSlimScrollModule ],
  exports: [ DatepickerComponent, CommonModule, FormsModule, NgSlimScrollModule ],
})
export class DatepickerModule { }
