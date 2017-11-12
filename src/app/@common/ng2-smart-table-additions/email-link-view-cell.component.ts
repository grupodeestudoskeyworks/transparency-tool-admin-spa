
import { Component, Input, OnInit } from '@angular/core';

import { ViewCell } from 'ng2-smart-table';

@Component({
  template: `
    <a href="mailto:{{value}}">{{value}}</a>
  `,
})
export class EmailLinkViewCellComponent implements ViewCell {

  renderValue: string;

  @Input() value: string | number;
  @Input() rowData: any;
}