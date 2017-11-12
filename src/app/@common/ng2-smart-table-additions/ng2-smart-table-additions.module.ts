import { NgModule } from '@angular/core';

import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { EmailLinkViewCellComponent } from './email-link-view-cell.component';

@NgModule({
  imports: [
    Ng2SmartTableModule,
    ThemeModule,
  ],
  declarations: [
    EmailLinkViewCellComponent,
  ],
  entryComponents: [
    EmailLinkViewCellComponent,
  ],
})
export class Ng2SmartTableAdditionsModule { }
